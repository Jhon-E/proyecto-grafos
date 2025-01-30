import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const RenderInfoFloyd = ({ info }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center min-w-96 h-dvh p-2 bg-transparent overflow-y-auto">
      <div className="flex px-4 bg-base-content bg-opacity-15 backdrop-filter backdrop-blur-lg flex-col w-full h-full items-center rounded-lg overflow-y-auto justify-between py-2">
        <section className="w-full flex items-center justify-between">
          <h1>Nodo central</h1>
          <h3>
            Pulse <kbd className="kbd">esc</kbd> para quitar
          </h3>
        </section>
        <section className="overflow-x-auto flex flex-col w-full justify-self-center">
          <h2>Matriz de distancias</h2>
          <br />
          <table className="text-center rounded-lg w-full self-center bg-base-200">
            {/* head */}
            <thead>
              <tr className="bg-base-content text-base-100 text-sm">
                <th className="p-1 border border-base-300">Nodo</th>
                {Object.keys(info.distances).map((_, i) => (
                  <th
                    key={i}
                    className="border border-base-300 bg-base-content text-base-100 min-w-4 font-bold text-sm"
                  >
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(info.distances).map(([row, values], rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-base-content hover:text-base-100 transition duration-200"
                >
                  <th className="p-1 border border-base-300 bg-base-content text-base-100 font-bold text-sm">
                    {row}
                  </th>
                  {Object.values(values).map((d, colIndex) => (
                    <td key={colIndex} className="p-1 border border-base-300">
                      {d}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="w-full flex flex-col gap-4">
          <div className="flex justify-between w-full items-center gap-5">
            <h2>Nodo central</h2>
            <div
              className={`${
                theme == "dark" ? "bg-white  text-black" : "bg-black text-white"
              } rounded-full h-10 w-10 font-bold flex justify-center items-center`}
            >
              {info.centerNode}
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <h2>
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
