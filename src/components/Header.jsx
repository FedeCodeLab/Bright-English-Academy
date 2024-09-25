export default function Header() {
  return (
    <header className="border-b bg-white py-6 shadow-lg">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h3 className="text-xl font-semibold text-violet-700">BEA</h3>
        <nav className="flex gap-3 font-medium text-violet-700 items-center">
          <a href="#">Home</a>
          <a href="#">Nosotros</a>
          <a href="#">Profesores</a>
          <button className="text-white bg-violet-700 py-2 px-4 rounded-lg">
            Inscribirse
          </button>
        </nav>
      </div>
    </header>
  );
}
