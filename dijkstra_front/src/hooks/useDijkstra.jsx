const useDijkstra = (nodes, links, startNode, endNode) => {
  //tendrá las distancias
  const distances = {};
  //los nodos previos o visitados | S
  const previous = {};
  //cola de prioridad que tendrá los pesos acumulados
  const queue = [];

  //DEFINO FUNCION RELAX (nodoactual, vecino, peso)
  const RELAX = (u, v, weight) => {
    const alt = distances[u.id] + weight;
    

    if (alt < distances[v.id]) {
      distances[v.id] = alt;
      previous[v.id] = u.id;

      console.warn("EEEEEEEEEEE");

      // Reinserto el nodo en la cola para actualizar su posición
      const neighborIndex = queue.findIndex((n) => n.id === v.id);
      if (neighborIndex !== -1) {
        queue.splice(neighborIndex, 1, nodes.find(n => n.id === v.id));
        console.warn("AAAAAAAAAAAAAAA");
        console.log({queue});
        
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

  console.log("Queue: ",queue);
  

  while (queue.length > 0) {
    queue.sort((a, b) => distances[a.id] - distances[b.id]);
    //peso actual | U
    const currentNode = queue.shift(); // Extraigo el nodo con la menor distancia

    if (currentNode.id === endNode.id) break;

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
  let currentNode = endNode.id;
  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }
  
  console.log({ path, distance: distances[endNode.id] });

  // Verifica si hay camino o si el nodo final es alcanzable
  if (path[0] !== startNode.id) return { path: [], distance: Infinity }; // Retorna un array vacío si no hay ruta válida

  
  return { path, distance: distances[endNode.id] };
};

export default useDijkstra;
