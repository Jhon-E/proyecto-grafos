import { useRef, useEffect, useReducer, useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import NodeReducer from "../Reducer/NodesReducer";
import * as d3 from "d3";

const Graph = ({ nodes, links }) => {
  const [state, dispatch] = useReducer(NodeReducer, { nodes });
  const { action, setEnlaces } = useContext(DataContext);
  const [count, setCount] = useState(0);
  const [firtsNode, setFirtsNode] = useState({});

  const ref = useRef();

  const linker = (first, second) => {
    const newLink = {
      source: first.id, // ID del nodo de origen
      target: second.id, // ID del nodo de destino
      weight: 0,
    };

    // Verificar si el enlace ya existe
    const linkExists = links.some(
      (l) =>
        (l.source.id === newLink.source && l.target.id === newLink.target) ||
        (l.source.id === newLink.target && l.target.id === newLink.source)
    );

    // Si el enlace no existe, agregarlo
    if (!linkExists && first.id !== second.id) {
      setEnlaces((prevLinks) => [...prevLinks, newLink]);
    }
  };

  useEffect(() => {
    console.log(links);

    const svg = d3
      .select(ref.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .on("click", (e) => {
        const [x, y] = d3.pointer(e);
        const newNode = {
          id: `${state.nodes.length + 1}`,
          name: `Nodo ${state.nodes.length + 1}`,
          x,
          y,
        };
        action == "INSERT"
          ? dispatch({ type: action, newNode })
          : console.log("No es insert");
      });

    // Limpiar elementos existentes
    svg.selectAll("*").remove();

    // Crear simulación
    const simulation = d3
      .forceSimulation(state.nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
        .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(0))
      .force("collision", d3.forceCollide().radius(10));

    // Unir y actualizar enlaces
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "black")
      .attr("stroke-width", 3.5);

    // Unir y actualizar textos de enlaces
    const linkText = svg
      .append("g")
      .selectAll("text")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "linkText")
      .attr("fill", "#00a800")
      .attr("font-size", "20px")
      .text((d) => d.weight);

    // Unir y actualizar nodos
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(state.nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .attr("fill", "#69b3a2")
      .attr("cursor", "pointer")
      .attr("cursor", "grab")
      .style("user-select", "none")
      .on("click", (e, d) => {
        switch (action) {
          case "DELETE":
            dispatch({ type: action, d });
            setEnlaces((en) =>
              en.filter((l) => l.source.id !== d.id && l.target.id !== d.id)
            );
            break;
          case "LINK":
            console.log({ nodo: firtsNode.id, count });

            if (count < 1 && firtsNode.id == undefined) {
              console.log("Entro aca");

              setFirtsNode(d);
              setCount((c) => c + 1);
            } else if (count < 2 && firtsNode.id) {
              linker(firtsNode, d);
              setCount((c) => c + 1);
              setCount(0);
              setFirtsNode({});
            }
            break;
        }
      });

    // Unir y actualizar textos de nodos
    const nodeText = svg
      .append("g")
      .selectAll("text")
      .data(state.nodes)
      .enter()
      .append("text")
      .attr("class", "nodeText")
      .attr("fill", "black")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle")
      .attr("font-weight", 750)
      .attr("cursor", "grab")
      .attr("dy", "-25px")
      .style("user-select", "none")
      .text((d) => d.id)
      .on("click", (e, d) => {
        switch (action) {
          case "DELETE":
            dispatch({ type: action, d });
            setEnlaces((en) =>
              en.filter((l) => l.source.id !== d.id && l.target.id !== d.id)
            );
            break;
          case "LINK":
            console.log({ nodo: firtsNode.id, count });

            if (count < 1 && firtsNode.id == undefined) {
              console.log("Entro aca");

              setFirtsNode(d);
              setCount((c) => c + 1);
            } else if (count < 2 && firtsNode.id) {
              linker(firtsNode, d);
              setCount((c) => c + 1);
              setCount(0);
              setFirtsNode({});
            }
            break;
        }
      });

    // Actualizar posiciones en cada tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      linkText
        .attr("x", (d) => (d.source.x + d.target.x) / 2)
        .attr("y", (d) => (d.source.y + d.target.y) / 2);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      nodeText.attr("x", (d) => d.x).attr("y", (d) => d.y + 30);
    });

    return () => {
      // Detener simulación y limpiar SVG al desmontar el componente
      simulation.stop();
      svg.selectAll("*").remove();
    };
  }, [links, state.nodes, action, count]);

  return <svg ref={ref}></svg>;
};

export default Graph;

// Aplicar Dijkstra y resaltar el camino más corto
/* const { distances, previous } = dijkstra(nodes, links, 1);
let targetNode = 2; // Nodo de destino
while (previous[targetNode]) {
  svg.select(`#node-${targetNode}`).attr("fill", "red");
  targetNode = previous[targetNode];
} */
