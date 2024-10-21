import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Graph = ({ nodes, links }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("viewBox", "0 0 800 600")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background-color", "#272c30")
      .style("width", "100%")
      .style("height", "100%");

    // Limpiar elementos existentes
    svg.selectAll("*").remove();

    // Crear simulación
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(200)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(400, 300));

    // Unir y actualizar enlaces
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#999")
      .attr("stroke-width", 5);

    // Unir y actualizar textos de enlaces
    const linkText = svg
      .append("g")
      .selectAll("text")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "linkText")
      .attr("fill", "red")
      .attr("font-size", "20px")
      .text((d) => d.weight);

    // Unir y actualizar nodos
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .attr("fill", "#69b3a2");

    // Unir y actualizar textos de nodos
    const nodeText = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "nodeText")
      .attr("fill", "#5ebbff")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .text((d) => d.name);

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
  }, [nodes, links]);

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
