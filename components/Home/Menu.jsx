import Image from "next/image";
import logo from "../../images/logo.svg";
import {
  AiOutlineCalendar,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import * as PropTypes from "prop-types";
import React from "react";
import { BiMessageError, BiMoney } from "react-icons/bi";
import { HiOutlineGift, HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";

export const Menu = (props) => {
  const menuItems = [
    {
      name: "Sobre Nosotros",
      icon: <BiMessageError size={30} />,
      path: "/about/salas-de-escapismo-lugo",
      highlighted: false,
    },

    {
      name: "Reservar",
      icon: <AiOutlineCalendar size={30} />,
      path: "/reservar-escape-room",
      highlighted: true,
    },

    {
      name: "Para regalar",
      icon: <HiOutlineGift size={30} />,
      path: "/regalar-escape-room",
      highlighted: false,
    },

    {
      name: "Precios",
      icon: <BiMoney size={30} />,
      path: "/precios-escape-room",
      highlighted: false,
    },

    {
      name: "Condiciones",
      icon: <HiOutlineDocumentText size={30} />,
      path: "/condiciones-de-reserva",
      highlighted: false,
    },
  ];

  return (
    <div className="fixed w-full bg-white h-full p-5 right-0 z-50 flex flex-col justify-around items-center menu ">
      <div className=" w-full flex justify-around items-center">
        <span className="font-bold uppercase text-gray-700">
          <Image height={50} src={logo} alt="hype escape room lugo" />
        </span>
        <div className="text-gray-700">
          <AiOutlineClose
            className="cursor-pointer"
            size={30}
            onClick={props.onClick}
          />
        </div>
      </div>

      <ul className="space-y-3 p-5 pb-10">
        {menuItems.map((el) => (
          <Link
            passHref
            key={el.path}
            href={el.path}
            className={`flex items-center space-x-2`}
          >
            <div className="flex space-x-2 ">
              {el.icon}
              <span className="cursor-pointer link text-xl uppercase">
                {el.name}
              </span>
            </div>
          </Link>
        ))}
      </ul>

      <div className="border-t border-gray-200 py-4 flex w-full p-5 flex justify-around text-gray-700 ">
        <Link passHref href="https://www.instagram.com/hypelugo/?hl=en">
          <AiOutlineInstagram className="cursor-pointer" size={30} />
        </Link>

        <Link passHref href="https://www.facebook.com/HypeLugo">
          <AiOutlineFacebook className="cursor-pointer" size={30} />
        </Link>
      </div>
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
  menuItems: PropTypes.any,
  callbackfn: PropTypes.func,
};
