import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [enlaces, setEnlaces] = useState([]);
  const [peso, setPeso] = useState(0);
  const [action, setAction] = useState("");
  const [showModalPeso, setShowModalPeso] = useState(false);

  return (
    <DataContext.Provider
      value={{
        nodes,
        enlaces,
        peso,
        action,
        showModalPeso,
        setNodes,
        setEnlaces,
        setPeso,
        setAction,
        setShowModalPeso,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
