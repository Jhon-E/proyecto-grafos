import { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <AlertContext
      value={{
        showAlert,
        setShowAlert,
      }}
    >
      {children}
    </AlertContext>
  );
};
