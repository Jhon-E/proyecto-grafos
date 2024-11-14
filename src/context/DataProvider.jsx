import { createContext, useState, useReducer } from "react";
import NodesReducer from "../Reducer/NodesReducer"

export const DataContext = createContext();

const initialState = {
  nodes: [],
  links: [],
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NodesReducer, initialState);
  const [peso, setPeso] = useState(0);
  const [action, setAction] = useState("DEFAULT");
  const [showModalPeso, setShowModalPeso] = useState(false);

  return (
    <DataContext.Provider
      value={{
        state,
        peso,
        action,
        showModalPeso,
        dispatch,
        setPeso,
        setAction,
        setShowModalPeso,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
