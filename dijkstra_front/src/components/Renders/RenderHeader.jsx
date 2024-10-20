const RenderHeader = () => {
  return (
    <header className="w-[50px] text-3xl font-bold sticky top-5 left-5 text-primary z-30">
      <nav className=" bg-slate-900 rounded-full bg-opacity-35 backdrop-filter backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-primary text-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#como-funciona">¿Cómo funciona?</a>
              </li>
              <li>
                <a href="#ejemplos">Ejemplos</a>
              </li>
              <li>
                <a href="#calculadora">Calculadora distancia más corta</a>
              </li>
              <li>
                <a href="#creador">generador de grafos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RenderHeader;
