export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <h1 className="text-3xl font-semibold text-zinc-700">
        Error 404 - Página no encontrada
      </h1>
      <img src="images/robot.png" alt="" className="object-cover h-80" />
    </div>
  );
}
