const RenderInfoDijkstra = ({ info }) => {
  return (
    <div className="w-full p-10">
      <div className="flex flex-col w-full items-center">
        <h1 className=" text-xl font-bold">
          Ruta más corta desde Nodo {info.start.id} a Nodo {info.end.id}
        </h1>
        <ul className="timeline">
          {info.path.map((p, i) => (
            <>
              <li>
                {i === 0 ? null : <hr />}
                <div className="timeline-middle">
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
                {i === info.path.length - 1 ? null : <hr />}
              </li>
            </>
          ))}
        </ul>
      </div>
      <br />
      <h2 className=" text-lg font-bold">Distancia recorrida</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nodo</th>
              <th>Peso acumulado</th>
            </tr>
          </thead>
          <tbody>
            {info.path.map((p, i) => {
              return (
                <tr>
                  <th key={i}>Node {p}</th>
                  <td key={i + 1}>{info.distances[p]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderInfoDijkstra;
