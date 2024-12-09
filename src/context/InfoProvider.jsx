import { createContext, useState } from "react";

export const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({});

  return (
    <InfoContext value={{ info, setInfo }}>
      {children}
    </InfoContext>
  );
};

export default InfoProvider;
