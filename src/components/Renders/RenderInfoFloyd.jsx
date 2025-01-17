import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const RenderInfoFloyd = ({ info }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="absolute flex justify-center items-center top-0 rounded-lg right-1 w-1/3 h-full bg-transparent overflow-y-auto">
      <div className="flex flex-col p-4 bg-base-content bg-opacity-15 backdrop-filter backdrop-blur-lg w-full items-center rounded-lg overflow-y-auto">
        <section className="h-full w-full flex items-center p-2 rounded-lg justify-between">
          <h1 className=" text-lg font-bold">Problema del hospital </h1>
          <h3>
            Pulse <kbd className="kbd">esc</kbd> para quitar
          </h3>
        </section>
        <section className="p-4 w-full flex flex-col items-center justify-center">
          <h2 className=" text-lg font-bold">Matriz de distancias</h2>
          <br />
          <table className="table text-center border-collapse border border-base-300">
            {/* head */}
            <thead>
              <tr className="bg-base-content text-base-100 uppercase text-sm">
                <th className="p-3 border border-base-300">Nodo</th>
                {Object.keys(info.distances).map((_, i) => (
                  <th key={i} className="p-3 border border-base-300">
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(info.distances).map(([row, values], rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-base-200" : "bg-base-100"
                  } hover:bg-base-content hover:text-base-100 transition duration-200`}
                >
                  <th className="p-3 border border-base-300 bg-base-content text-base-100 font-bold">
                    {row}
                  </th>
                  {Object.values(values).map((d, colIndex) => (
                    <td key={colIndex} className="p-3 border border-base-300">
                      {d}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className=" w-full flex">
          <div className="flex flex-col w-full items-center gap-5">
            <h2 className=" text-lg font-bold">Nodo central</h2>
            <div
              className={`${
                theme == "dark" ? "bg-white  text-black" : "bg-black text-white"
              } rounded-full h-10 w-10 font-bold flex justify-center items-center`}
            >
              {info.centerNode}
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-5">
            <h2 className=" text-lg font-bold">
              Excentricidad del nodo {info.centerNode}
            </h2>
            <div className=" bg-primary text-base-100 rounded-xl h-10 w-10 font-bold flex justify-center items-center">
              {info.excentricity}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RenderInfoFloyd;
