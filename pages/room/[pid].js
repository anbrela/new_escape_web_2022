import React, { useEffect, useState, useRef } from "react";

import { FaRegClock, FaAngleLeft } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { rules, defaultRooms } from "../../components/room/rooms";
import { useRouter } from "next/router";

import { RoomHead } from "../../components/room/RoomHead";
import { HarryPotter } from "../../components/room/HarryPotter";
import * as PropTypes from "prop-types";
import Header from "../../components/Home/Header";

function RoomFooter(props) {
  return (
    <div className="fixed h-14 bg-yellow-200 bottom-0  left-0 w-full z-20 justify-around flex items-center">
      <div className="cursor-pointer">
        <FaAngleLeft
          onClick={props.onClick}
          size={40}
          className="text-gray-700"
        />
      </div>

      <div className="cursor-pointer" onClick={props.onClick1}>
        <AiOutlineCalendar size={40} className="text-gray-700" />
      </div>
    </div>
  );
}

RoomFooter.propTypes = {
  onClick: PropTypes.func,
  onClick1: PropTypes.func,
};
const Room = () => {
  const router = useRouter();
  const calendar = useRef(null);
  const [magicRoom, setMagicRoom] = useState(false);

  const viewCalendar = () => {
    if (calendar.current) {
      calendar.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const { pid } = router.query;

  useEffect(() => {
    if (pid === "1") {
      setRoom(defaultRooms[0]);
    } else if (pid === "2") {
      setRoom(defaultRooms[1]);
    } else if (pid === "3") {
      setRoom(3);
      setMagicRoom(true);
    }
  }, [pid]);

  const [room, setRoom] = useState(null);

  if (!room) {
    return <span>cargando...</span>;
  }

  if (magicRoom) {
    return (
      <>
        <Header navActive={true} />
        <RoomFooter onClick={() => router.back()} onClick1={viewCalendar} />
        <RoomHead
          name="Magic War Lugo"
          description="Escape room mágico en Lugo"
        />
        <HarryPotter />
      </>
    );
  }

  return (
    <main>
      <RoomHead
        name={room?.name}
        description={"Generated by create next app"}
      />

      <RoomFooter onClick={() => router.back()} onClick1={viewCalendar} />
      <div className="w-full flex ">
        <Image
          objectFit="cover"
          src={room?.coverImg}
          className=" object-center"
          alt="escape room lugo"
        />
      </div>

      <div className="w-full bg-white absolute -mt-10 card_room h-full min-h-screen p-10 pb-14 flex flex-col space-y-3 ">
        <div className="flex flex-col">
          <span className="italic text-xs uppercase">{room?.slogan}</span>
          <span className="text-6xl font-bold uppercase text-gray-700 -mt-1">
            {room?.name}
          </span>
        </div>
        <div className="flex  items-center space-x-2 pb-2">
          <div className="italic bg-gray-50 px-4 shadow text-sm">
            {room?.age}
          </div>
          <div className="italic flex items-center  bg-gray-50 px-4 shadow text-sm">
            <FaRegClock /> <span className="ml-1">{room?.time}</span>
          </div>
          <div className="italic flex items-center  bg-gray-50 px-4 shadow text-sm">
            <BsPeopleFill /> <span className="ml-1">{room?.players}</span>
          </div>
        </div>

        <div className="py-3">
          <p className="inline font-light text-base text-gray-700 mt-5">
            <span className="first_letter text-gray-700">
              {room?.descFirstLetter}
            </span>
            {room?.description}
          </p>
        </div>

        <div className="bg-gray-50 shadow w-full p-2 rounded-lg flex justify-around">
          <span className="">Precio por jugador</span>
          <span className="uppercase italic font-bold text-gray-700">
            desde 11€
          </span>
        </div>

        <div className="flex flex-col justify-center items-center py-3">
          <div className="h-32 flex">
            <Image
              objectFit="contain"
              alt="sala de escape lugo"
              width={80}
              src={room?.image2}
            />
          </div>
          <p className="sinopsis text-base font-light text-gray-700 ">
            <span className="first_letter">
              {room?.observationsFirstLetter}
            </span>{" "}
            {room?.observations}
          </p>
        </div>

        <div>
          <span className="text-gray-700 text-xl uppercase font-bold">
            Normas de reserva
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          {rules?.map((el) => (
            <div className="flex space-x-2  items-center" key={el}>
              <div className="text-gray-500">
                <ImCross color="tex-300" />
              </div>
              <span>{el}</span>
            </div>
          ))}
        </div>

        <div className="row" id="calendar">
          <h2 className="uppercase font-bold text-gray-700 mt-3 -mb-4">
            Reservas {room?.name}
          </h2>

          <div
            ref={calendar}
            className="load-turitop p-sm-4"
            data-service={room.service}
            data-lang="es"
            data-embed="box"
          />
        </div>
      </div>
    </main>
  );
};

export default Room;
