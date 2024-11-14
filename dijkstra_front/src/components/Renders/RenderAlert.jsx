import Alert from "../Alert";
import { useEffect, useState } from "react";

const RenderAlert = ({ action }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    switch (action) {
      case "INSERT":
        setMsg("¡Haga click en la pantalla para insertar!");
        break;
      case "DELETE":
        setMsg("Seleccione el nodo a eliminar");
        break;
      case "LINK":
        setMsg("Seleccione los nodos a enlazar");
        break;
      case "DIJKSTRA":
        setMsg("Seleccione un nodo de inicio y otro de destino");
        break;
    }
  }, [action]);

  return <Alert message={msg} />;
};

export default RenderAlert;
