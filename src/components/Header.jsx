import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white py-6 shadow-lg">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link to="/">
          <h3 className="text-xl font-semibold text-violet-700 transform hover:scale-105">
            BEA
          </h3>
        </Link>

        <nav className="flex gap-3 font-medium text-violet-700 items-center">
          <Link to="/">Inicio</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/professors">Profesores</Link>
          <button className="text-white bg-violet-700 py-2 px-4 rounded-lg">
            Inscribirse
          </button>
        </nav>
      </div>
    </header>
  );
}
