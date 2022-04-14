import { CustomHead } from "../../components/CustomHead";
import Header from "../../components/Home/Header";
import Image from "next/image";
import gift from "../../images/gift.png";
import { WhatsappContact } from "../../components/contact/WhatsappContact";

const Gift = () => {
  return (
    <div>
      <CustomHead
        title="Regala un escape room"
        description="Si buscas un regalo original para este 2022 reserva un escape room. Hype escape room Lugo pone a tu disposición 3 salas de escape para que tu cumpleaños ¡sea memorable!"
      />
      <Header navActive={true} />
      <main className="py-12 h-full">
        <Image src={gift} alt="regalo orignial lugo" />
        <div className="px-5 space-y-3">
          <h1 className="text-4xl font-bold">
            ¿Buscando un regalo original en Lugo?
          </h1>
          <p>
            Si buscas un regalo original en lugo este 2022 estás de suerte, en
            Hype Escape Room ponemos a tu disposición 3 salas fantásticas para
            que te lo pases bomba.
          </p>

          <div>
            <h2 className="text-xl font-medium ">
              ¿Cómo regalo un escape room?
            </h2>
            <p>
              Regalar un escape room{" "}
              <span className="font-semibold">es muy fácil</span>, simplemente
              tienes que entrar en tu sala favorita y en el calendario de
              reservas, seleccionar <span className="italic">para regalar</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium ">Regalo que siempre gusta</h2>
            <p>
              Por nuestra experiencia y por la de las centenas de miles de
              escapes que hay en la tierra, sabemos que{" "}
              <span className="font-semibold">
                {" "}
                es una actividad que siempre gusta,
              </span>{" "}
              ya sea en familia, con amigos o en pareja. Si no estás decidido y
              necesitas hacer un plan original, no lo dudes.
            </p>
          </div>
          <WhatsappContact />
        </div>
      </main>
    </div>
  );
};

export default Gift;
