import Graph from "../Graph";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const RenderGraph = () => {
  const [peso, setPeso] = useState(0);

  const {enlaces, nodes} = useContext(DataContext)

  return (
    <div className="w-full h-dvh">
      <Graph nodes={nodes} links={enlaces} />
    </div>
  );
};

export default RenderGraph;
