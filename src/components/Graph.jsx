import { useRef, useEffect, use } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { InfoContext } from "../context/InfoProvider";
import * as d3 from "d3";
import useDijkstra from "../hooks/useDijkstra";
import useHospitalLocation from "../hooks/useHospitalLocation";
import { DataContext } from "../context/DataProvider";
import { handlerNode } from "../utils/scripts";

const Graph = () => {
  const { action, setShowModalPeso, peso, state, dispatch } = use(DataContext);
  const { theme } = use(ThemeContext);
  const { setInfo } = use(InfoContext);

  const firtsNodeRef = useRef();

  const ref = useRef(null);

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
          .distance(150)
      )
      .force("collision", d3.forceCollide().radius(15))
      .force("linkCharge", d3.forceManyBody().strength(-150).distanceMax(150));

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
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      )
      .on("click", (e, d) =>
        handlerNode(
          e,
          d,
          svg,
          dispatch,
          firtsNodeRef,
          setShowModalPeso,
          setInfo,
          action,
          useDijkstra,
          useHospitalLocation,
          theme,
          state,
          peso
        )
      );

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
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      )
      .on("click", (e, d) =>
        handlerNode(
          e,
          d,
          svg,
          dispatch,
          firtsNodeRef,
          setShowModalPeso,
          setInfo,
          action,
          useDijkstra,
          useHospitalLocation,
          theme,
          state,
          peso
        )
      );

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
