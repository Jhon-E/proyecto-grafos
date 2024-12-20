import { useRef, useEffect, use } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { InfoContext } from "../context/InfoProvider";
import * as d3 from "d3";
import useDijkstra from "../hooks/useDijkstra";
import useHospitalLocation from "../hooks/useHospitalLocation";
import { DataContext } from "../context/DataProvider";

const pathLinks = (path, links) => {
  const pathLinks = [];
  for (let i = 0; i < path.length - 1; i++) {
    const source = path[i];
    const target = path[i + 1];
    const link = links.find(
      (l) =>
        (l.source.id === source && l.target.id === target) ||
        (l.source.id === target && l.target.id === source)
    );
    if (link) {
      pathLinks.push(link);
    }
  }
  return pathLinks;
};

const Graph = () => {
  const { action, setShowModalPeso, peso, state, dispatch } =
    use(DataContext);
  const { theme } = use(ThemeContext);
  const { info, setInfo } = use(InfoContext);

  const firtsNodeRef = useRef();

  const ref = useRef(null);

  const handlerNode = (e, d, svg) => {
    svg.selectAll(".node").style("fill", theme == "dark" ? "white" : "black");
    svg.selectAll(".link").attr("stroke", theme == "dark" ? "black" : "grey");
    switch (action) {
      case "DELETE":
        dispatch({ type: action, d });
        break;
      case "LINK":
        if (!firtsNodeRef.current) {
          firtsNodeRef.current = d;
          setShowModalPeso(true);
        } else {
          linker(firtsNodeRef.current, d, peso);
          firtsNodeRef.current = null;
          setShowModalPeso(false);
        }
        break;
      case "DIJKSTRA":
        if (!firtsNodeRef.current) {
          firtsNodeRef.current = d;
          svg
            .select(`#node-${firtsNodeRef.current.id}`)
            .style("fill", "#2525ff");
        } else {
          const { path, distances, previous } = useDijkstra(
            state.nodes,
            state.links,
            firtsNodeRef.current,
            d
          );
          setInfo({
            start: firtsNodeRef.current,
            end: d,
            path,
            distances,
            previous,
          });
          const p_l = pathLinks(path, state.links);
          path.forEach((p) => {
            svg.select(`#node-${p}`).style("fill", "#2525ff");
          });

          p_l.forEach((l) =>
            svg.select(`#link-${l.index}`).attr("stroke", "#2525ff")
          );
          firtsNodeRef.current = null;
        }
        break;
      case "FLOYD_WARSHALL":
        const { centerNode, excentricity, distances } = useHospitalLocation(
          state.nodes,
          state.links
        );

        setInfo({ centerNode, excentricity, distances });

        svg.select(`#node-${centerNode}`).style("fill", "#2525ff");
        break;
    }
  };

  const linker = (first, second, weight) => {
    const newLink = {
      source: first.id, // ID del nodo de origen
      target: second.id, // ID del nodo de destino
      weight,
    };
    dispatch({ type: action, newLink });
  };

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .on("click", (e) => {
        const [x, y] = d3.pointer(e);
        const newNode = {
          id: `${state.nodes.length}`,
          name: `Nodo ${state.nodes.length + 1}`,
          x,
          y,
        };
        action == "INSERT" ? dispatch({ type: action, newNode }) : null;
      });

    // Limpiar elementos existentes
    svg.selectAll("*").remove();

    // Crear simulación
    const simulation = d3
      .forceSimulation(state.nodes)
      .force(
        "link",
        d3
          .forceLink(state.links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-10))
      .force("collision", d3.forceCollide().radius(100))
      .force(
        "center",
        d3.forceCenter(
          ref.current.clientWidth / 2,
          ref.current.clientHeight / 2
        )
      );

    // Unir y actualizar enlaces
    const link = svg
      .append("g")
      .selectAll("line")
      .data(state.links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("id", (_, i) => `link-${i}`)
      .attr("stroke", theme == "dark" ? "black" : "grey")
      .attr("stroke-width", 3.5);

    // Unir y actualizar textos de enlaces
    const linkText = svg
      .append("g")
      .selectAll("text")
      .data(state.links)
      .enter()
      .append("g");

    linkText
      .append("rect")
      .attr("fill", theme == "dark" ? "black" : "grey")
      .attr("rx", 5)
      .attr("width", 25)
      .attr("height", 25)
      .attr("class", "backText");

    linkText
      .append("text")
      .attr("class", "linkText")
      .attr("fill", "white")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .text((d) => d.weight);

    // Unir y actualizar nodos
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(state.nodes)
      .enter()
      .append("circle")
      .attr("class", `node`)
      .attr("id", (d) => `node-${d.id}`)
      .attr("r", 15)
      .attr("fill", theme == "dark" ? "white" : "black")
      .attr("cx", (d) => ref.current.clientWidth / 2)
      .attr("cy", (d) => ref.current.clientHeight / 2)
      .attr("cursor", "pointer")
      .attr("cursor", "grab")
      .style("user-select", "none")
      .on("click", (e, d) => handlerNode(e, d, svg));


    // Unir y actualizar textos de nodos
    const nodeText = svg
      .append("g")
      .selectAll("text")
      .data(state.nodes)
      .enter()
      .append("text")
      .attr("class", "nodeText")
      .attr("fill", theme == "dark" ? "black" : "white")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle")
      .attr("font-weight", 750)
      .attr("cursor", "grab")
      .attr("dy", "-25px")
      .style("user-select", "none")
      .text((d) => d.id)
      .on("click", (e, d) => handlerNode(e, d, svg));

    // Actualizar posiciones en cada tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      linkText
        .selectAll("rect")
        .attr("x", (d) => (d.source.x + d.target.x) / 2 - 10)
        .attr("y", (d) => (d.source.y + d.target.y) / 2 - 10);

      linkText
        .selectAll("text")
        .attr("x", (d) => (d.source.x + d.target.x) / 2)
        .attr("y", (d) => (d.source.y + d.target.y) / 2);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      nodeText.attr("x", (d) => d.x).attr("y", (d) => d.y + 30);
    });

    setInfo({});

    return () => {
      simulation.stop();
      svg.selectAll("*").remove();
    };
  }, [state.links, state.nodes, action, peso, theme]);

  return <svg ref={ref}></svg>;
};

export default Graph;
