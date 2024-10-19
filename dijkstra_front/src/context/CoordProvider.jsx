import { data } from "autoprefixer";
import { createContext, useEffect, useState } from "react";

const CoordsContext = createContext();

export const CoordsProvider = ({ children }) => {
  const [c, setC] = useState(
    JSON.parse(localStorage.getItem("coordenadas")) ?? null
  );

  const [start, setStart] = useState({});
  const [end, setEnd] = useState({}); 

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geo = {
            c: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            start,
            end,
          };
          localStorage.setItem("currentPos", JSON.stringify(geo));
          setC({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obteniendo la geolocalización:", error);
          setC(null);
        }
      );
    } else {
      console.error("Geolocalización no es soportada por tu navegador.");
      setC(null);
    }
  }, []);

  return (
    <CoordsContext.Provider value={{ c, start, end, setStart, setEnd, setC }}>
      {children}
    </CoordsContext.Provider>
  );
};

export { CoordsContext };
