const RenderInfoDijkstra = ({ info }) => {
  return (
    <div className="w-full h-full p-2 bg-transparent overflow-y-auto">
      <div className="flex p-4 bg-base-300 flex-col w-full items-center rounded-lg overflow-y-auto">
      <section className="h-full w-full flex bg-base-200 items-center p-2 rounded-lg justify-between">
          <h1 className=" text-lg font-bold">Algoritmo Dijkstra </h1>
          <h3>
            Pulse <kbd className="kbd">esc</kbd> para quitar
          </h3>
        </section>
        <br />
        <section className="p-4 w-full flex flex-col items-center bg-base-200 rounded-lg">
          <h1 className=" text-xl font-bold">
            Ruta más corta desde Nodo {info.start.id} a Nodo {info.end.id}
          </h1>
          <ul className="timeline">
            {info.path.map((p, i) => (
              <>
                <li key={i}>
                  {i === 0 ? null : <hr key={`timeline-hr-${i}`} />}
                  <div key={`timeline-item-${i}`} className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Nodo {p}</div>
                  {i === info.path.length - 1 ? null : (
                    <hr key={`timeline-hr-end-${i}`} />
                  )}
                </li>
              </>
            ))}
          </ul>
        </section>
        <br />
        <section className="overflow-x-auto flex flex-col gap-4 w-full justify-self-center">
          <h2 className=" text-lg font-bold">Recorrido y peso acumulado</h2>
          <table className="table text-center border-collapse border border-base-300 w-auto">
            {/* head */}
            <thead>
              <tr className="bg-primary text-base-100 uppercase text-sm">
                <th className="p-3 border border-base-300">Nodo</th>
                <th className="p-3 border border-base-300">Peso acumulado</th>
              </tr>
            </thead>
            <tbody>
              {info.path.map((p, i) => {
                return (
                  <tr
                    key={"row-"+i}
                    className={`${
                      i % 2 === 0 ? "bg-base-200" : "bg-base-100"
                    } hover:bg-primary hover:text-base-100 transition duration-200`}
                  >
                    <th className="p-3 border border-base-300 bg-primary text-base-100 font-bold">
                      Nodo {p}
                    </th>
                    <td key={"col-" + i} className="p-3 border border-base-300">
                      {info.distances[p]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default RenderInfoDijkstra;
