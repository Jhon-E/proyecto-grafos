import Graph from "../Graph";
import { useEffect, useState } from "react";

const RenderGraph = () => {
  const [cant, setCant] = useState(0);
  const [nodos, setNodos] = useState([]);
  const [enlaces, setEnlaces] = useState([]);
  const [peso, setPeso] = useState(0);

  return (
    <div className="w-full h-dvh">
      <Graph nodes={nodos} links={enlaces} />
    </div>
  );
};

export default RenderGraph;
