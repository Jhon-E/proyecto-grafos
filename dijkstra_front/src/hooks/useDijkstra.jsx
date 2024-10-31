const useDijkstra = (nodes, links, startNode, endNode) => {
  const distances = {};
  const previous = {};
  const queue = [];

  nodes.forEach((node) => {
    distances[node.id] = Infinity;
    previous[node.id] = null;
    queue.push(node);
  });

  distances[startNode] = 0;

  while (queue.length > 0) {
    queue.sort((a, b) => distances[a.id] - distances[b.id]);
    const currentNode = queue.shift();

    if (currentNode.id === endNode) break; // Termina si se llega al nodo final

    links.forEach((link) => {
      if (link.source === currentNode.id || link.target === currentNode.id) {
        const neighbor =
          link.source === currentNode.id ? link.target : link.source;
        const alt = distances[currentNode.id] + link.weight;
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = currentNode.id;
        }
      }
    });
  }

  // Reconstrucción del camino más corto
  const path = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  // Verifica si hay camino o si el nodo final es alcanzable
  if (path[0] !== startNode) return []; // Retorna un array vacío si no hay ruta válida

  return { path };
};

export default useDijkstra;
