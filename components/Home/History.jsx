import first from "../../images/first.webp";
import second from "../../images/men2.svg";
import third from "../../images/third.webp";
import React from "react";
import Image from "next/image";
import clock from "../../images/Clock.png";
import lock from "../../images/Lock-locked.png";
import telescope from "../../images/Telescope.png";

const items = [
  {
    image: clock,
    title: "LA AVENTURA",
    alt: "",
    content:
      "Nuestras aventuras son familiares y adaptadas para todos los públicos. ¡Es ideal para jugar con niños!",
  },

  {
    image: lock,
    title: "EL INGENIO",
    alt: "",
    content:
      "En Hype Escape Room pondrás a prueba tu ingenio, observación y sobre todo, el trabajo en equipo. ¿Quieres ponerte a prueba? ",
  },

  {
    image: telescope,
    title: "PLAN DIFERENTE",
    alt: "",
    content:
      "Si no tienes plan y quieres buscar una alternativa diferente ven a divertirte con nosotros y créeme, ¡repetirás! ",
  },
];

export const History = (props) => {
  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col p-6 space-y-3">
        {items.map((el, index, array) => (
          <div
            className={`flex items-center justify-around h-40 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={el.image}
          >
            <div className="h-40 flex w-2/6">
              <Image
                objectFit="contain"
                height="100%"
                src={el.image}
                alt={el.alt}
              />
            </div>
            <div className="flex flex-col p-5 w-4/6">
              <span className="uppercase text-xl font-bold text-gray-700">
                {el.title}
              </span>
              <p className="text-sm font-light text-gray-500 leading-5">
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
