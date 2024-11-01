const nodes = [
  { id: "1", name: "Nodo 1", x: 50, y: 250 },
  { id: "2", name: "Nodo 2", x: 200, y: 500 },
  { id: "3", name: "Nodo 3", x: 350, y: 350 },
  { id: "4", name: "Nodo 4", x: 500, y: 380 },
  { id: "5", name: "Nodo 5", x: 650, y: 350 },
];

const links = [
  { source: "1", target: "2", weight: 5 },
  { source: "1", target: "3", weight: 2 },
  { source: "2", target: "4", weight: 4 },
  { source: "3", target: "4", weight: 1 },
  { source: "4", target: "5", weight: 3 },
  { source: "3", target: "2", weight: 7 },
  { source: "3", target: "5", weight: 4 },
];

export const graph_1 = { nodes, links };
