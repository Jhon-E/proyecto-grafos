const useDijkstra = (nodes, links, startNode, endNode) => {
  //tendrá las distancias de cada nodo
  const distances = {};
  //los nodos previos o visitados | S
  const previous = {};
  //cola de prioridad donde estan los nodos por visitar
  const queue = [];

  //DEFINO FUNCION RELAX (nodoactual, vecino, peso)
  const RELAX = (u, v, weight) => {
    const alt = distances[u.id] + weight;

    if (alt < distances[v.id]) {
      distances[v.id] = alt;
      previous[v.id] = u.id;

      // Reinserto el nodo en la cola
      const neighborIndex = queue.findIndex((n) => n.id === v.id);
      if (neighborIndex !== -1) {
        queue.splice(
          neighborIndex,
          1,
          nodes.find((n) => n.id === v.id)
        );
      }
    }
  };

  //inicializo las distancias en infinito
  nodes.forEach((node) => {
    distances[node.id] = Infinity;
    previous[node.id] = null;
    queue.push(node);
  });

  distances[startNode.id] = 0;

  while (queue.length > 0) {
    queue.sort((a, b) => distances[a.id] - distances[b.id]);
    //peso actual | U
    const currentNode = queue.shift(); // Extraigo el nodo con menor peso o distancia

    //ESTO ES DE UN NODO A OTRO
    //if (currentNode.id === endNode.id) break;

    //segundo bucle

    links.forEach((link) => {
      //por cada link adyacente a nodo actual | RELAX (nodoactual, vecino, peso)
      if (
        link.source.id === currentNode.id ||
        link.target.id === currentNode.id
      ) {
        const neighbor =
          link.source.id === currentNode.id ? link.target : link.source;

        RELAX(currentNode, neighbor, link.weight);
      }
    });
  }

  // Reconstrucción del camino más corto
  const path = [];
  if (!!endNode) {
    let currentNode = endNode.id;
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }
  }
  //console.log({ path, distances, previous });

  // Verifica si hay camino o si el nodo final es alcanzable
  //if (path[0] !== startNode.id) return { path: [], distances: Infinity }; // Retorna un array vacío si no hay ruta válida

  return { path, distances };
};

export default useDijkstra;
