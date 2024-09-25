import CardProfessor from "../components/CardProfessor";
import professorsData from "../data/professorsData";

export default function Professors() {
  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="pb-8 text-2xl font-semibold text-zinc-700">
        Nuestros profesores
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {professorsData.map((professor, index) => (
          <CardProfessor
            key={index}
            title={professor.title}
            description={professor.description}
            image={professor.image}
          />
        ))}
      </div>
    </div>
  );
}
