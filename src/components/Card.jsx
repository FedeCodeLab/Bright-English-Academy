export default function Card({ title, description, professor }) {
  return (
    <div className="bg-indigo-800 rounded-lg px-6 py-8 shadow-lg text-white transform hover:scale-105 select-none">
      <p className="text-xl font-semibold ">{title}</p>
      <p className=" pb-6">{description}</p>
      <p className="">
        Dictado por: <span className="font-semibold">{professor}</span>
      </p>
    </div>
  );
}
