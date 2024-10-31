import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const DisplayInfo = ({ info }) => {
  const { action } = useContext(DataContext);
  console.log({ info });

  return (
    <div className=" bg-base-300 fixed bottom-0 left-0 px-5 rounded-se-lg w-max flex justify-end gap-5">
      <span>
        ({info.x},{info.y})
      </span>
      <h5>Herramienta: {action.toLowerCase()}</h5>
    </div>
  );
};

export default DisplayInfo;
