let counter = 0;
const NodeReducer = (state, action) => {
  console.log(action);
  
  switch (action.type) {
    case "INSERT":
      console.log(state);

      return {
        nodes: [...state.nodes, action.newNode],
      };
    case "DELETE":
      counter--;
      return {
        nodes: state.nodes.filter((n) => action.d.id !== n.id),
      };
    default:
      throw new Error("Error en el reducer de los nodos.");
  }
};

export default NodeReducer;
