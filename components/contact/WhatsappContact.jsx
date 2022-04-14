import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const WhatsappContact = () => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-xl">Si necesitas ayuda escríbenos </span>
      <div className="cursor-pointer bg-green-200 w-12 shadow-lg p-2 flex justify-center rounded-lg">
        <Link
          passHref
          href="https://api.whatsapp.com/send?phone=+34636948129&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n."
        >
          <AiOutlineWhatsApp size={25} />
        </Link>
      </div>
    </div>
  );
};
