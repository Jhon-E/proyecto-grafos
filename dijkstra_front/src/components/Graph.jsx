import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { dijkstra } from "../utils/dijkstra";

const Graph = ({ nodes, links }) => {
  const ref = useRef();

  // Función para inicializar el SVG
  const createSVG = () => {
    return d3
      .select(ref.current)
      .attr("width", 800)
      .attr("height", 600)
      .style("background-color", "#272c30");
  };

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", 800)
      .attr("height", 600)
      .style("background-color", "#272c30");

    /* LIMPIO EL SVG ANTES DE AGREGAR LOS NODOS */

    svg.selectAll('*').remove()

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(200)
      ) // Aumentar la distancia entre nodos
      .force("charge", d3.forceManyBody().strength(-50)) // Aumentar la fuerza de repulsión
      .force("center", d3.forceCenter(400, 300));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links, (d) => `${d.source.id}-${d.target.id}`)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-width", 5);

    const linkText = svg
      .append("g")
      .selectAll("text")
      .data(links, (d) => `${d.source.id}-${d.target.id}`)
      .join("text")
      .attr("fill", "white")
      .attr("font-size", "20px")
      .text((d) => d.weight);

    const nodeText = svg
      .append("g")
      .selectAll("text")
      .data(nodes, (d) => d.id)
      .enter()
      .append("text")
      .attr("fill", "black")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .text((d) => d.name);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes, (d) => d.id)
      .enter()
      .append("circle")
      .attr("r", 15)
      .attr("fill", "#69b3a2");
      
    /* Esto actualiza las posiciones en cada tick (1 tick es una unidad de medida equivalente a 1 frame) */
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      linkText
        .attr("x", (d) => (d.source.x + d.target.x) / 2.05)
        .attr("y", (d) => (d.source.y + d.target.y) / 2.05);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      nodeText.attr("x", (d) => d.x).attr("y", (d) => d.y + 30);
    });

    // Aplicar Dijkstra y resaltar el camino más corto
    /* const { distances, previous } = dijkstra(nodes, links, 1);
    let targetNode = 2; // Nodo de destino
    while (previous[targetNode]) {
      svg.select(`#node-${targetNode}`).attr("fill", "red");
      targetNode = previous[targetNode];
    } */

    return () => {
      simulation.stop();
      svg.selectAll("*").remove();
    };
  }, [nodes, links]);

  return <svg ref={ref}></svg>;
};

export default Graph;
