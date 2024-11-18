import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

const DisplayInfo = () => {
  const { action } = useContext(DataContext);
  const [info, setInfo] = useState({x: 0, y: 0});

  const handleMouseMove = (e) => setInfo({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [info]);

  return (
    <div className="text-xs bg-base-300 fixed bottom-0 left-0 rounded-se-lg w-[380px] flex justify-end pr-4 gap-2">
      <span>{`(${info.x},${info.y})`}</span>
      <h5>Herramienta: {action.toLowerCase()}</h5>
      <aside>
        <p>{new Date().getFullYear()} - Créditos para Jhone & D3.</p>
      </aside>
    </div>
  );
};

export default DisplayInfo;
