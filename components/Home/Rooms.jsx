import game from "../../images/jumanji_game.jpeg";
import simpsons from "../../images/simpsons-header.jpg";
import harry from "../../images/harry-01.png";
import { HiLockClosed } from "react-icons/hi";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Rooms = () => {
  const items = [
    {
      path: "/room/1",
      image: game,
      title: "Jumanji",
      target: "Adultos",
      difficulty: 4,
      alt: "escape room jumanji",
    },
    {
      path: "/room/2",
      image: simpsons,
      title: "Simpsons",
      target: "Adultos",
      difficulty: 4,
      alt: "escape room simpsons",
    },

    {
      path: "/magic-war",
      image: harry,
      title: "Magic War",
      alt: "escape room magic war",
    },
  ];

  return (
    <section className="scrolled  bg-white pl-6 py-6" id="rooms">
      <div className="flex flex-col">
        <span className="text-xs italic uppercase">
          Una para cada tipo de persona
        </span>
        <span className="uppercase font-bold text-2xl text-gray-700 ">
          Nuestras aventuras
        </span>
      </div>

      <div className="flex overflow-x-auto scrolled py-4">
        {items.map((itm) => (
          <Link key={itm.title} href={`${itm.path}`}>
            <a className="w-64 h-96 item inline-block  mt-5 rounded-lg overflow-hidden relative mr-4">
              <div className="w-full h-full absolute flex items-end  justify-end flex-col p-4 z-20">
                <span className="text-white text-3xl uppercase font-bold">
                  {itm.title}
                </span>
                {itm.target ? (
                  <div className="flex items-center space-x-2">
                    <span className="uppercase text-xs italic text-yellow-300">
                      {itm.target}
                    </span>
                    <div className="flex">
                      {[...Array(itm.difficulty)].map((e) => (
                        <span key={e} className="text-white">
                          <HiLockClosed />
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <span className="text-white uppercase text-sm">
                      en construcción
                    </span>
                    <span className="w-4 h-4 animate-spin border border-l-2 border-yellow-300 rounded-full" />
                  </div>
                )}
              </div>
              <Image
                src={itm.image}
                objectFit="cover"
                layout="fill"
                height="100%"
                className="h-full object-cover shadow-lg"
                alt={itm.alt}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};
