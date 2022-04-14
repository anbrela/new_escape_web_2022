import asylum from "../../images/asylum.png";
import Header from "../../components/Home/Header";
import mafia from "../../images/mafia.png";
import jumanji from "../../images/jumanji.webp";
import post from "../../images/postmortem.png";
import simpsons from "../../images/simpsons-header.jpg";
import harry from "../../images/harry-01.png";
import { AboutImage } from "../../components/About/AboutImage";
import { CustomHead } from "../../components/CustomHead";

export const Hype = () => {
  return (
    <div>
      <Header navActive={true} />
      <CustomHead
        title="Nuestra historia"
        description="Hype Escape Room Lugo nació en 2017 y en 2022 es el escape room más grande de Lugo y uno de los mejores valorados de Galicia. Si aún no has visitado sus salasm ¿a que estás esperando?"
      />

      <div className="w-full h-full flex flex-col items-center space-y-6  py-20">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-start w-3/4">
            <h1 className="text-3xl font-bold">Nuestra historia</h1>
          </div>
          <div className="w-3/4 flex items-center justify-center ">
            <span className="text-gray-600 font-light text-xl text-justify">
              Hype Escape Room nació el 31 de octubre de 2017.
              <span className="font-bold">
                {" "}
                Fue el primer Escape Room de Lugo
              </span>{" "}
              y de los primeros de Galicia.
            </span>
          </div>
          <AboutImage
            legend=" Sala Asylum 2017 - 2019"
            altImage="escape room terror lugo"
            image={asylum}
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-600 font-light text-xl text-justify">
              La Sala Asylum fue el primer escape room de terror de Galicia y
              fue un rotundo éxito. La apertura de la sala fue a la par que
              Mafia, el escape room para principiantes de Lugo.
            </p>
          </div>

          <AboutImage
            image={mafia}
            altImage="escape room cárcel lugo"
            legend="Sala Mafia 2017 - 2018"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-600 font-light text-xl text-justify">
              En 2018, tras la buena acogida, abrimos el escape room de Jumanji.
              <span className="font-bold">
                {" "}
                Una aventura para toda la familia{" "}
              </span>
              con mucha electrónica y elementos sorprendentes. Tranquilos, ¡no
              veréis arañas de verdad!
            </p>
          </div>

          <AboutImage
            image={jumanji}
            altImage="escape room jumanji lugo"
            legend="Sala Jumanji 2018 - Actualidad"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-600 font-light text-xl text-justify">
              A finales de 2018 creamos la sala de Los Simpsons, una aventura
              también para adultos y que ha funcionado a las mil maravillas
              hasta este año 2022. Es posible que su futuro sea incierto con la
              llegada de las nuevas aventuras.
            </p>
          </div>

          <AboutImage
            image={simpsons}
            altImage="escape room simpsons lugo"
            legend="Sala Jumanji 2018 - Actualidad"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-600 font-light text-xl text-justify">
              Tras cerrar la sala Asylum y cambiarnos de local en 2019, creamos
              una nueva sala de terror llamada Post Mortem que sería su segunda
              parte. Tras 1 año de funcionamiento y 1 año y medio de idas y
              venidas por el covid, decidimos venderla y puso rumbo a Madrid. Se
              ecuentra <span className="italic"> mejorada </span> en Good Lock
              Escape.
            </p>
          </div>

          <AboutImage
            image={post}
            altImage="escape room post mortem lugo"
            legend="Sala Post Mortem 2019 - 2021"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-600 font-light text-xl text-justify">
              Tras años de incertidumbre tras la pandemia, aunque ya parece que
              se ve el final del camino, nos pusimos a construír una nueva
              aventura. No sería una sala cualquiera, sería la sala más mágica
              que hayamos visto unos verdaderos fans de la magia. Pusimos todo
              nuestro empeño y lo que la pandemia y los ingresos nos dejaron
              continuamos avanzando hasta que a día de hoy, ya podemos ver casi
              la luz del final del camino.{" "}
              <span className="font-semibold">
                {" "}
                Pronto tendréis más novedades
              </span>
            </p>
          </div>

          <AboutImage
            image={harry}
            altImage="escape room harry potter lugo"
            legend="Sala Magic War 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Hype;
