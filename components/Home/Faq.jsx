import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import * as PropTypes from "prop-types";
import React from "react";

export const Faq = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const faqs = [
    {
      question: "¿Pueden jugar niños?",
      answer:
        "Los niños pueden jugar aunque las experiencias no están diseñadas para menores de 13 años. En nuestras salas estamos acostumbrados a recibir a familias que vienen a jugar con niños menores de esa edad es por eso que recomendamos que la experiencia se realice con más de un adulto en el juego así disfrutarán todos por igual. Si no quieres venir a jugar con ellos, los niños deberán ser todos mayores de 13 años. Recomendamos la experiencia para familias que juegan dos adultos y uno o dos niños",
    },

    {
      question: "¿Podemos jugar más de 6?",
      answer:
        "Nuestras aventuras están diseñadas para 4 personas. Si tenéis pensado ser más de 4, la experiencia será peor, por no hablar de ser más de 6, es un caos completo y los espacios no están concebidos para tanta gente. Nunca permitimos la entrada de más de 6 personas porque primamos la calidad del juego antes que el dinero",
    },

    {
      question: "¿Puedo cancelar la reserva?",
      answer:
        "La reserva puede cancelarse hasta 48h antes, por lo general somos bastante laxos con el tema siempre que no sea el mismo día. Si necesitas ayuda con el tema ponte en contacto con nostros aquí",
    },

    {
      question: "¿Puedo sentir miedo?",
      answer:
        "En nuestras aventuras no sentirás ningún tipo de miedo, claustrofobia ni agobio de ningún tipo.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="p-6">
        <div className="max-w-7xl mx-auto py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="  max-w-3xl mx-auto">
            <div className="">
              <span className="uppercase text-xs italic text-gray-700">
                estamos a tu disposición
              </span>
              <h2 className="text-2xl font-bold uppercase text-gray-700 ">
                preguntas frecuentes
              </h2>
            </div>

            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <FaAngleDown
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-1">
                        <p className=" text-sm font-light text-gray-500">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

Faq.propTypes = {
  faqs: PropTypes.any,
  callbackfn: PropTypes.func,
};
