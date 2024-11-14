import {
  calculateAllDistances,
  calculateExcentricities,
} from "../utils/scripts.js";

const useHospitalLocation = (nodes, links) => {
  // Paso 1: Calcular distancias mínimas desde cada nodo
  const distancesFromEachNode = calculateAllDistances(nodes, links);

  
  console.log(distancesFromEachNode);

  // Paso 2: Calcular excentricidades
  const excentricities = calculateExcentricities(distancesFromEachNode);

  // Paso 3: Encontrar el nodo central (nodo con menor excentricidad)

  let centerNode = null;
  let minExcentricity = Infinity;

  for (const node in excentricities) {
    if (excentricities[node] < minExcentricity) {
      minExcentricity = excentricities[node];
      centerNode = node;
    }
  }

  return { centerNode, excentricity: minExcentricity, distances: distancesFromEachNode };
};

export default useHospitalLocation;
