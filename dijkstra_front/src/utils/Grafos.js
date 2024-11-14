const width = document.body.clientWidth / 2;
const height = document.body.clientHeight / 2;

const nodes = [
  { id: "0", name: "Nodo 1", x: width, y: 300 },
  { id: "1", name: "Nodo 2", x: width, y: 300 },
  { id: "2", name: "Nodo 3", x: width, y: 300 },
  { id: "3", name: "Nodo 4", x: width, y: 300 },
  { id: "4", name: "Nodo 5", x: width, y: 300 },
  { id: "5", name: "Nodo 6", x: width, y: 300 },
];

const links = [
  { source: "0", target: "1", weight: 2 },
  { source: "1", target: "2", weight: 3 },
  { source: "2", target: "3", weight: 4 },
  { source: "3", target: "4", weight: 2 },
  { source: "4", target: "5", weight: 5 },
  { source: "1", target: "3", weight: 2 },
  { source: "2", target: "4", weight: 3 },
  { source: "5", target: "4", weight: 3 },
  { source: "3", target: "0", weight: 3 },
];

export const graph_1 = { nodes, links };


const nodes2 = [
  { id: "0", name: "Nodo 1", x: width, y: 300 },
  { id: "1", name: "Nodo 2", x: width, y: 400 },
  { id: "2", name: "Nodo 3", x: width, y: 500 },
  { id: "3", name: "Nodo 4", x: width, y: 600 },
  { id: "4", name: "Nodo 5", x: width, y: 700 },
];

const links2 = [
  { source: "0", target: "1", weight: 3 },
  { source: "0", target: "2", weight: 2 },
  { source: "1", target: "3", weight: 4 },
  { source: "2", target: "3", weight: 1 },
  { source: "3", target: "4", weight: 5 },
  { source: "1", target: "4", weight: 6 },
];

export const graph_2 = { nodes2, links2 };

const nodes3 = [
  { id: "0", name: "Nodo 1", x: width, y: 100 },
  { id: "1", name: "Nodo 2", x: width, y: 200 },
  { id: "2", name: "Nodo 3", x: width, y: 300 },
  { id: "3", name: "Nodo 4", x: width, y: 400 },
  { id: "4", name: "Nodo 5", x: width, y: 500 },
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
  { id: "0", name: "Nodo 1", x: width, y: 100 },
  { id: "1", name: "Nodo 2", x: width + 100, y: 200 },
  { id: "2", name: "Nodo 3", x: width - 100, y: 300 },
  { id: "3", name: "Nodo 4", x: width + 200, y: 400 },
  { id: "4", name: "Nodo 5", x: width - 200, y: 500 },
  { id: "5", name: "Nodo 6", x: width + 300, y: 600 },
  { id: "6", name: "Nodo 7", x: width - 300, y: 700 },
  { id: "7", name: "Nodo 8", x: width, y: 800 },
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
