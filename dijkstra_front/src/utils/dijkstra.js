export const dijkstra = (nodes, links, startNode) => {
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

  return { distances, previous };
};
