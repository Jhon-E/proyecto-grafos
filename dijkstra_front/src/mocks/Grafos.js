const width = document.body.clientWidth / 2;
const height = document.body.clientHeight / 2

const nodes = [
  { id: "1", name: "Nodo 1", x: width, y: 500 },
  { id: "2", name: "Nodo 2", x: width, y: 500 },
  { id: "3", name: "Nodo 3", x: width, y: 500 },
  { id: "4", name: "Nodo 4", x: width, y: 500 },
  { id: "5", name: "Nodo 5", x: width, y: 500 },
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

const nodes2 = [
  { id: "1", name: "Nodo 6", x: width, y: 300 },
  { id: "2", name: "Nodo 7", x: width, y: 400 },
  { id: "3", name: "Nodo 8", x: width, y: 500 },
  { id: "4", name: "Nodo 9", x: width, y: 600 },
  { id: "5", name: "Nodo 10", x: width, y: 700 },
];

const links2 = [
  { source: "1", target: "2", weight: 3 },
  { source: "1", target: "3", weight: 2 },
  { source: "2", target: "4", weight: 4 },
  { source: "3", target: "4", weight: 1 },
  { source: "4", target: "5", weight: 5 },
  { source: "2", target: "5", weight: 6 },
];

export const graph_2 = {nodes2, links2}

const nodes3 = [
  { id: "1", name: "Nodo 11", x: width, y: 100 },
  { id: "2", name: "Nodo 12", x: width, y: 200 },
  { id: "3", name: "Nodo 13", x: width, y: 300 },
  { id: "4", name: "Nodo 14", x: width, y: 400 },
  { id: "5", name: "Nodo 15", x: width, y: 500 },
];

const links3 = [
  { source: "1", target: "2", weight: 5 },
  { source: "1", target: "3", weight: 2 },
  { source: "2", target: "4", weight: 4 },
  { source: "3", target: "4", weight: 6 },
  { source: "3", target: "5", weight: 3 },
  { source: "4", target: "5", weight: 1 },
  { source: "2", target: "5", weight: 7 },
];

export const graph_3 = { nodes3, links3 };