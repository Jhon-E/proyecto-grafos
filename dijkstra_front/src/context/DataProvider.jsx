import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [enlaces, setEnlaces] = useState([]);
  const [peso, setPeso] = useState(0);
  const [action, setAction] = useState("");

  return (
    <DataContext.Provider
      value={{
        nodes,
        enlaces,
        peso,
        action,
        setNodes,
        setEnlaces,
        setPeso,
        setAction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
