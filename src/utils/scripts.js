import useDijkstra from "../hooks/useDijkstra";

export const calculateAllDistances = (nodes, links) => {
  const distancesForNode = {};

  nodes.forEach((node) => {
    const { distances } = useDijkstra(nodes, links, node);
    distancesForNode[node.id] = distances;
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

const linker = (first, second, weight, dispatch, action) => {
  const newLink = {
    source: first.id, // ID del nodo de origen
    target: second.id, // ID del nodo de destino
    weight,
  };
  dispatch({ type: action, newLink });
};

const pathLinks = (path, links) => {
  const pathLinks = [];
  for (let i = 0; i < path.length - 1; i++) {
    const source = path[i];
    const target = path[i + 1];
    const link = links.find(
      (l) =>
        (l.source.id === source && l.target.id === target) ||
        (l.source.id === target && l.target.id === source)
    );
    if (link) {
      pathLinks.push(link);
    }
  }
  return pathLinks;
};

export const handlerNode = (
  e,
  d,
  svg,
  dispatch,
  firtsNodeRef,
  setShowModalPeso,
  setInfo,
  action,
  useDijkstra,
  useHospitalLocation,
  theme,
  state,
  peso
) => {
  svg.selectAll(".node").style("fill", theme == "dark" ? "white" : "black");
  svg.selectAll(".link").attr("stroke", theme == "dark" ? "black" : "grey");
  switch (action) {
    case "DELETE":
      dispatch({ type: action, d });
      break;
    case "LINK":
      if (!firtsNodeRef.current) {
        firtsNodeRef.current = d;
        setShowModalPeso(true);
      } else {
        linker(firtsNodeRef.current, d, peso, dispatch, action);
        firtsNodeRef.current = null;
        setShowModalPeso(false);
      }
      break;
    case "DIJKSTRA":
      if (!firtsNodeRef.current) {
        firtsNodeRef.current = d;
        svg.select(`#node-${firtsNodeRef.current.id}`).style("fill", "#2525ff");
      } else {
        const { path, distances, previous } = useDijkstra(
          state.nodes,
          state.links,
          firtsNodeRef.current,
          d
        );
        setInfo({
          start: firtsNodeRef.current,
          end: d,
          path,
          distances,
          previous,
        });
        const p_l = pathLinks(path, state.links);
        path.forEach((p) => {
          svg.select(`#node-${p}`).style("fill", "#2525ff");
        });

        p_l.forEach((l) =>
          svg.select(`#link-${l.index}`).attr("stroke", "#2525ff")
        );
        firtsNodeRef.current = null;
      }
      break;
    case "FLOYD_WARSHALL":
      const { centerNode, excentricity, distances } = useHospitalLocation(
        state.nodes,
        state.links
      );

      setInfo({ centerNode, excentricity, distances });

      svg.select(`#node-${centerNode}`).style("fill", "#2525ff");
      break;
    default:
      console.warn("Invalid action");
      break;
  }
};
