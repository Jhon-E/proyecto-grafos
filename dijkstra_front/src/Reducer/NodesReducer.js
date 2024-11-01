const NodesReducer = (state, action) => {
  switch (action.type) {
    case "INSERT":
      return {
        ...state,
        nodes: [...state.nodes, action.newNode],
      };
    case "DELETE":
      const newLinks = state.links.filter(
        (l) => l.source.id !== action.d.id && l.target.id !== action.d.id
      );
      return {
        ...state,
        links: newLinks,
        nodes: state.nodes.filter((n) => action.d.id !== n.id),
      };

    case "LINK":
      // Verificar si el enlace ya existe
      const linkExists = state.links.some(
        (l) =>
          (l.source.id === action.newLink.source &&
            l.target.id === action.newLink.target) ||
          (l.source.id === action.newLink.target &&
            l.target.id === action.newLink.source)
      );

      // Si el enlace no existe, agregarlo

      if (!linkExists && action.newLink.source !== action.newLink.target)
        return {
          ...state,
          links: [...state.links, action.newLink],
        };
      return state;

    case "GRAPH_1":
      return {
        nodes: action.graph_1.nodes,
        links: action.graph_1.links,
      };
    default:
      throw new Error("Error en el reducer de los nodos.");
  }
};

export default NodesReducer;
