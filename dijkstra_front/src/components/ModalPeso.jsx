import { useState, useContext, memo } from "react";
import { DataContext } from "../context/DataProvider";

const ModalPeso = memo(() => {
  const { setPeso, peso } = useContext(DataContext);
  const [show, setShow] = useState(true);
  console.log({ show });

  return (
    <>
      {show ? (
        <aside className="absolute text-center flex flex-col top-1/2 left-1/2 bg-base-300 p-4 gap-4 rounded-lg -translate-x-1/2 -translate-y-1/2">
          <label htmlFor="peso">Guardar peso</label>
          <input
            value={peso}
            type="number"
            name="peso"
            placeholder="Ingrese el peso del enlace"
            className="input input-bordered input-info w-full max-w-xs"
            onChange={(e) => setPeso(e.target.value)}
          />
          <button
            className="text-center bg-primary text-base-100 cursor-pointer font-bold rounded-lg p-2"
            onClick={() => setShow(false)}
          >
            Guardar
          </button>
        </aside>
      ) : null}
    </>
  );
});

export default ModalPeso;
