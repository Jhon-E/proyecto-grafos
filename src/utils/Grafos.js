const nodes = [
  { id: "0", name: "Nodo 1", x: 100, y: 100 },
  { id: "1", name: "Nodo 2", x: 200, y: 200 },
  { id: "2", name: "Nodo 3", x: 300, y: 300 },
  { id: "3", name: "Nodo 4", x: 400, y: 400 },
  { id: "4", name: "Nodo 5", x: 500, y: 500 },
  { id: "5", name: "Nodo 6", x: 600, y: 600 },
];

const links = [
  { source: "0", target: "1", weight: 2 },
  { source: "2", target: "3", weight: 4 },
  { source: "4", target: "5", weight: 5 },
  { source: "2", target: "4", weight: 3 },
  { source: "5", target: "4", weight: 3 },
  { source: "3", target: "0", weight: 3 },
  { source: "0", target: "2", weight: 1 },
  { source: "4", target: "1", weight: 5 },
  { source: "4", target: "5", weight: 6 },
  { source: "1", target: "5", weight: 10 },
];

export const graph_1 = { nodes, links };

const nodes2 = [
  { id: "0", name: "Nodo 1", x: 150, y: 150 },
  { id: "1", name: "Nodo 2", x: 250, y: 250 },
  { id: "2", name: "Nodo 3", x: 350, y: 350 },
  { id: "3", name: "Nodo 4", x: 450, y: 450 },
  { id: "4", name: "Nodo 5", x: 550, y: 550 },
];

const links2 = [
  { source: "0", target: "1", weight: 3 },
  { source: "0", target: "2", weight: 2 },
  { source: "1", target: "3", weight: 4 },
  { source: "2", target: "3", weight: 1 },
  { source: "3", target: "4", weight: 5 },
  { source: "1", target: "4", weight: 6 },
  { source: "2", target: "4", weight: 3 },
];

export const graph_2 = { nodes2, links2 };

const nodes3 = [
  { id: "0", name: "Nodo 1", x: 200, y: 200 },
  { id: "1", name: "Nodo 2", x: 300, y: 300 },
  { id: "2", name: "Nodo 3", x: 400, y: 400 },
  { id: "3", name: "Nodo 4", x: 500, y: 500 },
  { id: "4", name: "Nodo 5", x: 600, y: 600 },
];

const links3 = [
  { source: "0", target: "1", weight: 5 },
  { source: "0", target: "2", weight: 2 },
  { source: "1", target: "3", weight: 4 },
  { source: "2", target: "3", weight: 6 },
  { source: "2", target: "4", weight: 3 },
  { source: "3", target: "4", weight: 1 },
  { source: "0", target: "4", weight: 7 },
];

export const graph_3 = { nodes3, links3 };

const nodes4 = [
  { id: "0", name: "Nodo 1", x: 250, y: 250 },
  { id: "1", name: "Nodo 2", x: 350, y: 350 },
  { id: "2", name: "Nodo 3", x: 450, y: 450 },
  { id: "3", name: "Nodo 4", x: 550, y: 550 },
  { id: "4", name: "Nodo 5", x: 650, y: 650 },
  { id: "5", name: "Nodo 6", x: 750, y: 750 },
  { id: "6", name: "Nodo 7", x: 850, y: 850 },
  { id: "7", name: "Nodo 8", x: 950, y: 950 },
];

const links4 = [
  { source: "0", target: "1", weight: 2 },
  { source: "0", target: "2", weight: 3 },
  { source: "1", target: "3", weight: 4 },
  { source: "2", target: "4", weight: 1 },
  { source: "3", target: "5", weight: 5 },
  { source: "4", target: "6", weight: 2 },
  { source: "5", target: "7", weight: 6 },
  { source: "6", target: "7", weight: 3 },
  { source: "1", target: "2", weight: 7 },
  { source: "3", target: "4", weight: 1 },
];

export const graph_4 = { nodes4, links4 };