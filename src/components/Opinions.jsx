import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Opinions() {
  return (
    <div className="w-[90%] mx-auto pb-6">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[300px] text-center p-8">
            <p className="text-2xl text-zinc-700 font-light">
              “Mejoré mis habilidades en inglés rápidamente gracias a la
              plataforma. ¡Totalmente recomendable!”
            </p>
            <span className="mt-4 text-zinc-600 font-semibold">
              — Laura Gómez
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[300px] text-center p-8">
            <p className="text-2xl text-zinc-700 font-light">
              “El curso personalizado se ajustó perfectamente a mis necesidades.
              ¡Muy recomendable!”
            </p>
            <span className="mt-4 text-zinc-600 font-semibold">
              — Carlos Herrera
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[300px] text-center p-8">
            <p className="text-2xl text-zinc-700 font-light">
              “Gané confianza para hablar inglés gracias a las clases dinámicas.
              ¡Excelentes resultados!”
            </p>
            <span className="mt-4 text-zinc-600 font-semibold">
              — Sofía Martínez
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
