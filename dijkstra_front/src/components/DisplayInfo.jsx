import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const DisplayInfo = ({ info }) => {
  const { action } = useContext(DataContext);

  return (
    <div className="text-xs bg-base-300 fixed bottom-0 left-0 px-5 rounded-se-lg w-max flex justify-end gap-5">
      <span>
        ({info.x},{info.y})
      </span>
      <h5>Herramienta: {action.toLowerCase()}</h5>
      <aside>
        <p>
          {new Date().getFullYear()} - Créditos para Jhone & D3.
        </p>
      </aside>
    </div>
  );
};

export default DisplayInfo;
