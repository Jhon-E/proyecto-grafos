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
    }
  }, [action]);

  return <Alert message={msg} />;
};

export default RenderAlert;
