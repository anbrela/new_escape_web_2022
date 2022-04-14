import harry from "../../images/harry.png";
import Typewriter from "typewriter-effect";
import { Countdown } from "./Countdown";
import Image from "next/image";

import React from "react";

export const Background = (props) => {
  return (
    <section className="w-full h-screen relative relative">
      <div className="w-full h-full absolute flex flex-col justify-end wrap p-10 items-center flex space-x-2 p-5 z-10 ">
        <div className="space-x-1 w-full h-40 flex flex-col justify-center items-center">
          <Countdown />

          <span className="text-4xl uppercase font-black text-white">
            una experiencia
          </span>
          <Typewriter
            wrapperClassName="text-green-300"
            options={{
              strings: ["MÁGICA", "FANTÁSTICA", "PARA SOÑAR"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Image
        objectFit="cover"
        layout="fill"
        height="100%"
        src={harry}
        className="h-full"
        alt="escape room harry potter galicia"
      />
    </section>
  );
};
