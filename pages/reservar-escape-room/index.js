import Header from "../../components/Home/Header";
import Image from "next/image";
import harry from "../../images/harry-01.png";
import jumanji from "../../images/jumanji.webp";
import simpsons from "../../images/simpsons.png";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Header navActive={true} />
      <div className="py-20 px-5">
        <h1 className="text-2xl font-medium">Reserva tu aventura</h1>
        <p>
          Si quieres reservar una aventura con nosotros selecciona la que más te
          guste y en cada sala tendrás un calendario para seleccionar el día y
          hora que prefieras.
        </p>
        <Link passHref href="/room/3">
          <div className="mt-5 cursor-pointer">
            <div className="relative w-full h-48">
              <div className="absolute w-full h-full z-10 flex justify-end items-end p-2">
                <span className="text-2xl text-white uppercase font-black">
                  Magic War
                </span>
              </div>
              <div className=" w-full h-full overflow-hidden flex rounded cool-shadow">
                <Image
                  src={harry}
                  objectFit="cover"
                  objectPosition="bottom"
                  alt="escape room harry potter galicia"
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="flex w-full space-x-1 cursor-pointer">
          <Link passHref href="/room/1">
            <div className="mt-1 w-2/4">
              <div className="relative w-full h-40">
                <div className="absolute w-full h-full z-10 flex justify-end items-end p-2">
                  <span className="text-2xl text-white uppercase font-black">
                    Jumanji
                  </span>
                </div>
                <div className=" w-full h-full overflow-hidden flex rounded cool-shadow">
                  <Link passHref href={"/room/1"}>
                    <Image
                      src={jumanji}
                      objectFit="cover"
                      objectPosition="bottom"
                      alt="escape room jumanji lugo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Link>

          <Link passHref href="/room/2">
            <div className="mt-1 w-2/4 cursor-pointer">
              <div className="relative w-full h-40">
                <div className="absolute w-full h-full z-10 flex justify-end items-end p-2">
                  <span className="text-2xl text-white uppercase font-black">
                    Simpsons
                  </span>
                </div>
                <div className=" w-full h-full overflow-hidden flex rounded cool-shadow">
                  <Image
                    src={simpsons}
                    objectFit="cover"
                    objectPosition="bottom"
                    alt="escape room simpsons lugo"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
