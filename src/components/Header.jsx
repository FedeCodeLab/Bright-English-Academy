import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const [confetti, setConfetti] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (!name || !email || !course) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un correo válido");
      return;
    }

    setConfetti(true);
    setError("");
    onOpenChange();

    toast.success("Solicitud enviada correctamente", {
      position: "bottom-right",
      autoClose: 3000,
    });

    setName("");
    setEmail("");
    setCourse("");

    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  };

  return (
    <>
      {confetti && <Confetti />}
      <ToastContainer />
      <header className="border-b bg-white py-6 shadow-lg sticky top-0 z-10 hidden md:block">
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

            <Button
              className="text-white bg-violet-700 py-2 px-4 rounded-lg"
              onPress={onOpen}
            >
              Inscribirse
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Inscribirse a un curso
                    </ModalHeader>
                    <ModalBody>
                      <form action="" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Nombre completo</label>
                          <input
                            type="text"
                            className="border p-2"
                            placeholder="Escriba su nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Correo</label>
                          <input
                            type="email"
                            className="border p-2"
                            placeholder="Inserte su correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Curso a realizar</label>
                          <select
                            name=""
                            id=""
                            className="border p-2"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                          >
                            <option value="">Seleccione un curso</option>
                            <option value="introductorio">
                              Inglés Introductorio
                            </option>
                            <option value="a1">Inglés A1</option>
                            <option value="a2">Inglés A2</option>
                            <option value="c1">Inglés C1</option>
                          </select>
                        </div>
                      </form>
                      {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                      <Button color="primary" onPress={handleSubmit}>
                        Inscribirse
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </nav>
        </div>
      </header>
    </>
  );
}
