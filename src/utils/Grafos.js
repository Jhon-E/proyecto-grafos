const width = document.body.clientWidth / 2;
const height = document.body.clientHeight / 2;

const nodes = [
  { id: "0", name: "Nodo 1" },
  { id: "1", name: "Nodo 2" },
  { id: "2", name: "Nodo 3" },
  { id: "3", name: "Nodo 4" },
  { id: "4", name: "Nodo 5" },
  { id: "5", name: "Nodo 6" },
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
  { id: "0", name: "Nodo 1" },
  { id: "1", name: "Nodo 2" },
  { id: "2", name: "Nodo 3" },
  { id: "3", name: "Nodo 4" },
  { id: "4", name: "Nodo 5" },
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
  { id: "0", name: "Nodo 1" },
  { id: "1", name: "Nodo 2" },
  { id: "2", name: "Nodo 3" },
  { id: "3", name: "Nodo 4" },
  { id: "4", name: "Nodo 5" },
];

const links3 = [
  { source: "0", target: "1", weight: 5 },
  { source: "0", target: "2", weight: 2 },
  { source: "1", target: "3", weight: 4 },
  { source: "2", target: "3", weight: 6 },
  { source: "2", target: "4", weight: 3 },
  { source: "3", target: "4", weight: 1 },
  { source: "1", target: "4", weight: 7 },
];

export const graph_3 = { nodes3, links3 };

const nodes4 = [
  { id: "0", name: "Nodo 1" },
  { id: "1", name: "Nodo 2" },
  { id: "2", name: "Nodo 3" },
  { id: "3", name: "Nodo 4" },
  { id: "4", name: "Nodo 5" },
  { id: "5", name: "Nodo 6" },
  { id: "6", name: "Nodo 7" },
  { id: "7", name: "Nodo 8" },
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
