export default function About() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('images/bg2.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center text-white p-4">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-12">
            Acerca de Nosotros
          </h1>
          <div className="text-zinc-300">
            <p className="pb-4">
              En nuestra academia, nos dedicamos a brindar una educación de
              inglés de alta calidad para estudiantes de todos los niveles.
              Nuestro enfoque está centrado en el estudiante, garantizando que
              cada individuo reciba la atención y el apoyo que necesita para
              alcanzar sus objetivos de aprendizaje.
            </p>
            <p className="pb-4">
              Contamos con un equipo de profesores altamente capacitados, cada
              uno con una sólida formación en enseñanza de idiomas y experiencia
              en la enseñanza del inglés como segundo idioma. Nuestros métodos
              de enseñanza son dinámicos y están diseñados para adaptarse a
              diferentes estilos de aprendizaje, asegurando una experiencia
              educativa efectiva y agradable.
            </p>
            <p className="pb-4">
              Ofrecemos una amplia variedad de cursos, desde clases para
              principiantes hasta programas avanzados y especializados, como
              inglés para negocios. Creemos en la importancia de aprender un
              idioma en un entorno práctico y real, por lo que nuestras
              lecciones incluyen actividades interactivas, juegos y ejercicios
              de conversación que fomentan la participación activa.
            </p>
            <p className="pb-4">
              En nuestra academia, valoramos la diversidad y la inclusión,
              creando un ambiente acogedor donde todos los estudiantes se
              sientan cómodos y motivados para aprender. Nos comprometemos a
              ayudar a cada estudiante a desarrollar su confianza y habilidades
              en el uso del inglés, preparando así el camino hacia el éxito
              personal y profesional.
            </p>
            <p className="pb-4">
              ¡Únete a nosotros y comienza tu viaje hacia la fluidez en inglés
              hoy mismo! Para más información sobre nuestros cursos y
              profesores, no dudes en contactarnos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
