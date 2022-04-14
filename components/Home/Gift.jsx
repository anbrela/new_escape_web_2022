import { GiBowTieRibbon } from "react-icons/gi";
import React from "react";

export const Gift = () => {
  return (
    <section className=" w-full h-full flex items-center parallax">
      <div className="m-6 p-6 flex flex-col  bg-white rounded relative">
        <div className="absolute top-2 right-2 text-red-400">
          <GiBowTieRibbon size={30} />
        </div>
        <span className="uppercase text-xs italic text-gray-700">
          un regalo diferente
        </span>
        <h2 className="text-xl font-bold uppercase text-gray-700 ">
          Escape room en Galicia
        </h2>
        <p className=" text-sm font-light text-gray-500 text-justify leading-5">
          El plan de ocio que está triunfando en Galicia. ¿Te parece un regalo
          original? En nuestras aventuras tendrás que ponerte a prueba con
          multitud de juegos de lógica, habilidad y deducción si quieres
          conseguir el objetivo que se plantea en cada sala. Si has llegado aquí
          buscando un regalo diferente, ¡Hype Escape Room abre sus puertas para
          ti y tus seres queridos!
        </p>
      </div>
    </section>
  );
};
