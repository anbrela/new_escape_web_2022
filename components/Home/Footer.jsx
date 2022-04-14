import Image from "next/image";
import logo from "../../images/logo.svg";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-20 w-full bg-gray-50 flex justify-around items-center">
      <div className="h-full w-3/6 flex items-center">
        <Image
          src={logo}
          objectFit="contain"
          height={35}
          className="h-10"
          alt="hype escape room lugo"
        />
      </div>
      <ul className="flex flex-col w-3/6">
        <li className="text-xs font-light">Condiciones de reserva</li>
        <li className="text-xs font-light">Política de Privacidad</li>
        <li className="text-xs font-light">Política de Cookies</li>
      </ul>
    </footer>
  );
};
