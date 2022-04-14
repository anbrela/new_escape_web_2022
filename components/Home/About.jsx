import image1 from "../../images/image1.svg";
import potions from "../../images/potions.png";
import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full h-full flex flex-wrap bg-white">
      <div className="p-6 flex flex-col w-full">
        <span className="uppercase text-xs italic text-gray-700">
          LAS PRIMERAS SALAS DE ESCAPE DE LUGO
        </span>
        <h1 className="text-2xl font-bold uppercase text-gray-700 ">
          HYPE ESCAPE ROOM LUGO
        </h1>
        <p className=" text-sm font-light text-gray-500 text-justify leading-5">
          ¿Qué es un escape room? Debéis cumplir una misión antes de 60 minutos,
          investigando y resolviendo las pistas que podáis encontrar. No
          consiste en escapar de la habitación por lo que nunca te sentirás
          encerrado. Si en aproximadamente 60 minutos no habéis dado con todas
          las pistas y resuelto el enigma habréis perdido.
        </p>
      </div>
      <div className="w-full h-full flex justify-center py-12">
        <Image alt="harry potter lugo" src={potions} />
      </div>
    </section>
  );
};
