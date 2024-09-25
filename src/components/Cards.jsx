import Card from "./Card";

export default function Cards() {
  return (
    <section className="w-[90%] mx-auto pt-12 pb-16">
      <h2 className="pb-8 text-2xl font-semibold text-zinc-700">
        Algunos de nuestros cursos
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          title={"Curso Inglés B1"}
          description={
            "Mejora tus habilidades en inglés para manejar situaciones cotidianas."
          }
          professor={"María López"}
        />
        <Card
          title={"Curso Inglés C2"}
          description={
            "Alcanza fluidez completa en inglés con este curso avanzado."
          }
          professor={"Carlos Martínez"}
        />
        <Card
          title={"Curso Inglés A2"}
          description={
            "Desarrolla tus habilidades para comunicarte en situaciones simples."
          }
          professor={"Lucía García"}
        />
        <Card
          title={"Curso Introductorio"}
          description={
            "Aprende lo básico del inglés y da tus primeros pasos en el idioma."
          }
          professor={"Gema Fractal"}
        />
      </div>
    </section>
  );
}
