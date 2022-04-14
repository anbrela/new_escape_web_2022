import Header from "../../components/Home/Header";
import Image from "next/image";
import woman from "../../images/woman.png";
import { WhatsappContact } from "../../components/contact/WhatsappContact";
import { CustomHead } from "../../components/CustomHead";

const Prices = () => {
  return (
    <div>
      <CustomHead
        title="Precios 2022"
        description="Precios 2022 de Hype Escape Room Lugo. Si quieres consultar y saber cuáles son los precios para esta temporada 2022."
      />
      <Header navActive={true} />
      <div className="py-10">
        <Image src={woman} alt="regalo original Lugo" />
        <div className="px-5 space-y-3">
          <h1 className="text-3xl font-bold">¿Cuánto vale un escape room?</h1>
          <p>
            Si estás buscando precios de escape room has llegado al sitio
            correcto. Realmente no todas las salas tienen el mismo precio y
            también es difícil decirte una cifra exacta ya que varía dependiendo
            de los siguientes factores:
          </p>

          <h2 className="font-medium text-xl">Precio escape room por grupo</h2>
          <p>
            El precio del escape room varía en función del grupo, es decir,
            puede que
            <span className="font-semibold">
              {" "}
              siendo 6 personas el precio sea de 11€ por persona pero siendo 2
              personas el precio sea de 25€ por persona.
            </span>
          </p>

          <h2 className="font-medium text-xl">Horas disponibles escape room</h2>
          <p>
            El precio del escape room fluctúa también por el horario, no es lo
            mismo reservar una hora un martes por la tarde que un sábado por la
            tarde.
            <span className="font-bold">
              {" "}
              Las horas de fin de semana por la tarde son más caras que por la
              semana
            </span>
          </p>

          <WhatsappContact />
        </div>
      </div>
    </div>
  );
};

export default Prices;
