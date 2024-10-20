const RenderOptions = ({ nodos, setPeso, peso, enlaces, setEnlaces }) => {
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

  return nodos.map((n) => (
    <div key={n.id} className="flex gap-6">
      <b className=" text-primary">{n.name}</b>
      <span>➡️</span>
      {nodos
        .filter((ns) => ns.id != n.id)
        .map((elem) => (
          <span className="w-[30px] flex flex-col gap-2" key={elem.id}>
            <p
              className="bg-green-200 rounded-full cursor-pointer hover:bg-accent text-base-100 hover:rounded-full transition-all text-center m-1"
              onClick={() =>
                peso != 0 ? agregarEnlace(n.id, elem.id, peso) : null
              }
            >
              {elem.id}
            </p>
            <div className=" text-center relative">
              <input
                type="number"
                name="peso"
                id="peso"
                className="bg-base-200 rounded-lg w-[50px] absolute -left-4 text-center"
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>
          </span>
        ))}
    </div>
  ));
};

export default RenderOptions;
