import { useMapEvent } from "react-leaflet";
import { useContext, useState } from "react";
import { CoordsContext } from "../context/CoordProvider";

export const Clickable = () => {
  const { setStart, setEnd } = useContext(CoordsContext);
  const [count, setCound] = useState(0);

  const map = useMapEvent("click", (e) => {
    if (count < 3) {
      switch (count) {
        case 0:
          setStart(e.latlng);
          setCound(count + 1);
          console.log(e);

          console.log("Posicion de inicio registrada: ", e.latlng);
          break;
        case 1:
          setEnd(e.latlng);
          setCound(count + 1);
          console.log("Posicion de destino registrada: ", e.latlng);
          break;
        default:
          setStart({});
          setEnd({});
          setCound(0);
          console.log("Se borró todo");

          break;
      }
    } else {
      console.log("No puedes poner mas marcadores");
    }
  });

  return null;
};
