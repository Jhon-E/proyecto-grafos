import { createContext, useState } from "react";

export const DataDijkstra = createContext();

const DijkstraProvider = ({ children }) => {
  const [infoDikstra, setInfoDikstra] = useState({});

  return (
    <DataDijkstra.Provider value={{ infoDikstra, setInfoDikstra }}>
      {children}
    </DataDijkstra.Provider>
  );
};

export default DijkstraProvider;
