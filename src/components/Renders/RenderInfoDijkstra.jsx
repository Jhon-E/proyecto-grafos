const RenderInfoDijkstra = ({ info }) => {
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center min-w-96 h-dvh p-2 bg-transparent overflow-y-auto">
      <div className="flex px-4 bg-base-content bg-opacity-15 backdrop-filter backdrop-blur-lg flex-col w-full h-full items-center rounded-lg overflow-y-auto justify-between py-2">
        <section className="w-full flex items-center justify-between">
          <h1 className="font-bold">Dijkstra </h1>
          <h3>
            Pulse <kbd className="kbd">esc</kbd> para quitar
          </h3>
        </section>
        <br />
        <section className="flex flex-col rounded-lg w-full">
          <h1 className=" self-start">
            Ruta más corta desde Nodo {info.start.id} a Nodo {info.end.id}
          </h1>
          <ul className="timeline self-center">
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
        <section className="overflow-x-auto flex flex-col gap-4 w-full justify-self-center">
          <h2>Recorrido y peso acumulado</h2>
          <table className="text-center rounded-lg w-full self-center bg-base-200">
            {/* head */}
            <thead>
              <tr className="bg-base-content text-base-100 text-sm">
                <th className="p-1 border border-base-300">Nodo recorrido</th>
                <th className="p-1 border border-base-300">Peso acumulado</th>
              </tr>
            </thead>
            <tbody>
              {info.path.map((p, i) => {
                return (
                  <tr
                    key={"row-" + i}
                    className="hover:bg-base-content hover:text-base-100 transition duration-200"
                  >
                    <th className="p-1 border border-base-300 bg-base-content text-base-100 font-bold text-sm">
                      Nodo {p}
                    </th>
                    <td
                      key={"col-" + i}
                      className="p-1 border border-base-300 text-sm"
                    >
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
