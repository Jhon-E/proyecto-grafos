import Graph from "../Graph";
import RenderOptions from "./RenderOptions";
import { useEffect, useMemo, useState } from "react";

const RenderGraph = () => {
  const [cant, setCant] = useState(0);
  const [nodos, setNodos] = useState([]);
  const [enlaces, setEnlaces] = useState([]);
  const [peso, setPeso] = useState(0);

  useEffect(() => {
    if (cant > 1) {
      const nuevosNodos = [];
      for (let i = 1; i <= cant; i++) {
        nuevosNodos.push({
          id: i,
          name: `Nodo ${i}`,
        });
      }
      setNodos(() => [...nuevosNodos]);
    }
  }, [cant]);

  return (
    <>
      <form
        action=""
        className="p-6 w-1/2 items-center self-center flex flex-col gap-6"
      >
        <h1 className="text-primary text-4xl font-bold">Generador de grafos</h1>
        <label htmlFor="nodos">Elija una cantidad de nodos</label>
        <select
          name="nodos"
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => {
            setCant(e.target.value);
            setEnlaces([]);
          }}
        >
          <option disabled>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        {nodos.length > 1 ? (
          <h3>Elija los enlaces (debe darle click al número para enlazar)</h3>
        ) : null}
        {nodos.length > 1 ? (
          <RenderOptions
            nodos={nodos}
            setPeso={setPeso}
            peso={peso}
            enlaces={enlaces}
            setEnlaces={setEnlaces}
          />
        ) : null}
      </form>
      <div className="w-full h-dvh">
        <Graph nodes={nodos} links={enlaces} />
      </div>
    </>
  );
};

export default RenderGraph;
