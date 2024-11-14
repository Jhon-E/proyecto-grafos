import Graph from "../Graph";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import ModalPeso from "../ModalPeso";

const RenderGraph = () => {
  const { enlaces, nodes, showModalPeso } = useContext(DataContext);

  return (
    <div className="w-full h-dvh">
      <Graph nodes={nodes} links={enlaces} />
      {showModalPeso ? <ModalPeso /> : null}
    </div>
  );
};

export default RenderGraph;
