import { useState } from "react";

const RenderOptions = ({ nodos, setPeso, peso, enlaces, setEnlaces }) => {
  const [target, setTarget] = useState(null);

  const agregarEnlace = (id_nodo, objetivo, peso) => {
    const nuevoEnlace = {
      source: id_nodo,
      target: objetivo,
      weight: peso,
    };

    setEnlaces((prevEnlaces) => {
      // Verificar si el enlace ya existe

      const enlaceExistente = prevEnlaces.some(
        (enlace) =>
          (enlace.source.id === id_nodo && enlace.target.id === objetivo) ||
          (enlace.source.id === objetivo && enlace.target.id === id_nodo)
      );

      console.log({ enlaceExistente });

      // Si el enlace no existe, agregarlo
      if (!enlaceExistente) {
        return [...prevEnlaces, nuevoEnlace];
      }
      console.log(peso);

      // Si el enlace ya existe, devolver el estado anterior sin cambios
      return prevEnlaces;
    });
  };

  return nodos.map((n, i) => (
    <div key={n.id} className="flex gap-6 items-center">
      <b className=" text-primary">{n.name}</b>
      <div
        className=" cursor-pointer text-base-100 font-bold bg-accent hover:bg-green-300 transition-all p-2 rounded-md hover"
        key={n.name}
        onClick={() => {
          console.log(n.id, target, peso);

          peso != 0 && target
            ? agregarEnlace(parseInt(n.id), target, peso)
            : null;
        }}
      >
        Enlazar
      </div>
      <select
        className=" flex flex-col gap-2 bg-green-200 text-base-100 font-bold rounded-lg"
        key={i}
        onChange={(e) => setTarget(parseInt(e.target.value))}
      >
        {nodos
          .filter((ns) => ns.id != n.id)
          .map((elem) => (
            <option className="bg-green-200 rounded-full cursor-pointer hover:bg-accent text-base-100 hover:rounded-full transition-all text-center m-1">
              {elem.id}
            </option>
          ))}
      </select>
      <div className=" text-center relative">
        <label htmlFor="peso">Peso </label>
        <input
          type="number"
          name="peso"
          id="peso"
          className="bg-base-200 rounded-lg w-[60px] text-center"
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
    </div>
  ));
};

export default RenderOptions;
