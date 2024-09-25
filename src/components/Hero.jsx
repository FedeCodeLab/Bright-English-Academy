export default function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('../../images/bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-end text-white p-4">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:items-end">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-4">
            Bright English Academy
          </h1>
          <p className="text-lg mb-8 text-center md:text-right w-full md:w-[50%]">
            Domina el inglés y abre las puertas a un mundo de oportunidades.
            Aprende de manera fácil y efectiva con nuestros cursos
            personalizados, diseñados para ti.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}
