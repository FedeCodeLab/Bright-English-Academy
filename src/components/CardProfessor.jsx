export default function CardProfessor({ title, description, image }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center bg-white rounded-lg px-6 py-8 shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-[50%] lg:w-[80%] aspect-square rounded-full object-cover"
      />
      <p className="text-xl font-semibold ">{title}</p>
      <p className=" pb-6">{description}</p>
    </div>
  );
}
