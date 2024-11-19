import { createContext, useState } from "react";

export const FloydContext = createContext({});

const FloydProvider = ({ children }) => {
  const [infoFloyd, setInfoFloyd] = useState({});

  return (
    <FloydContext.Provider value={{ infoFloyd, setInfoFloyd }}>
      {children}
    </FloydContext.Provider>
  );
};

export default FloydProvider;
