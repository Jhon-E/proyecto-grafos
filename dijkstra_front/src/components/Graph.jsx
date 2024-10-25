import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Graph = ({ nodes, links }) => {
  const ref = useRef();

  useEffect(() => {
    console.log({ nodes, links });
    const svg = d3
      .select(ref.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("background-color", "#272c30");

    // Limpiar elementos existentes
    svg.selectAll("*").remove();

    // Obtener dimensiones iniciales del SVG
    let width = ref.current.clientWidth;
    let height = ref.current.clientHeight;

    // Crear simulación
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-25))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30));

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

    //Opciones para el drag

    function dragstarted(event) {
      console.log(event);

      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    const drag = d3
      .drag()
      .subject(({ x, y }) => simulation.find(x - width / 2, y - height / 2, 40))
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    // Unir y actualizar nodos
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .attr("fill", "#69b3a2")
      .attr("cursor", "pointer")
      .attr("cursor", "grab")
      .style("user-select", "none")
      .call(d3.drag() // Aplica el comportamiento de arrastre aquí
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      );

    // Unir y actualizar textos de nodos
    const nodeText = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
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
      .call(d3.drag() // Aplica el comportamiento de arrastre aquí
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      );;

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
