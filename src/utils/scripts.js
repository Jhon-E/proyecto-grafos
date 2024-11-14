import useDijkstra from "../hooks/useDijkstra";

export const calculateAllDistances = (nodes, links) => {
  const distancesForNode = {};
  
  nodes.forEach((node) => {
    const { distances } = useDijkstra(nodes, links, node);
    distancesForNode[node.id] = distances;
    console.log(distances);
  });


  return distancesForNode;
};

export const calculateExcentricities = (distancesForNode) => {
  const excentricities = {};

  for (const node in distancesForNode) {
   // console.log(distancesForNode[node]);
    const distances = Object.values(distancesForNode[node]);
    excentricities[node] = Math.max(...distances);
  }

  return excentricities;
};
