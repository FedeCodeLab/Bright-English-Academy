export default function CardProfessor({ title, description, image }) {
  return (
    <div className="bg-indigo-800 rounded-lg px-6 py-8 shadow-lg text-white transform hover:scale-105 select-none cursor-pointer">
      <p className="text-xl font-semibold ">{title}</p>
      <p className=" pb-6">{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}
