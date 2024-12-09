import { createContext, useState } from "react";

export const FloydContext = createContext({});

const FloydProvider = ({ children }) => {
  const [infoFloyd, setInfoFloyd] = useState({});

  return (
    <FloydContext value={{ infoFloyd, setInfoFloyd }}>
      {children}
    </FloydContext>
  );
};

export default FloydProvider;
