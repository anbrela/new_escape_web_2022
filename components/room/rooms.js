import board from "../../images/jumanji_game.jpeg";
import token from "../../images/token.webp";
import simpsons from "../../images/simpsons.png";
import donut from "../../images/donut.svg";

export const defaultRooms = [
  {
    name: "Jumanji",
    coverImg: board,
    slogan: " Una aventura sin igual",
    age: "+13",
    time: "60 min",
    players: "2-6 jug.",
    image2: token,
    description:
      "o comiences a jugar a menos que tengas la intención de terminar. Alan Parrish os necesita para acabar el juego que empezó hace 27 años. El escape room de Jumanji os espera. ¿Os atrevéis a jugar?",
    descFirstLetter: "N",
    observations:
      "l escape room de jumanji es  nuestra sala por excelencia, un escape room de aventura que disfrutarán desde los más adultos hasta los más pequeños. Un frenesí de 60 minutos en el que intentarás salvar a Alan Parrish de sucumbir a la jungla. ¿Preparado para disfrutar del Escape Room de Jumanji?",
    observationsFirstLetter: "E",
    service: "P1",
  },

  {
    name: "Simpsons",
    coverImg: simpsons,
    slogan: "Springfield te necesita",
    age: "+13",
    time: "60 min",
    image2: donut,
    players: "2-6 jug.",
    description:
      "l pueblo de Springfield está sumido en el caos, una fuga en la central nuclear ha obligado a la EPA a evacuar la totalidad de los habitantes pero hay un problema. Nadie encuentra a Maggie. Es por eso que la EPA ha mandado un comando experto a las inmediaciones para que intenten salvar a la pequeña y si cabe, solucionar el problema radioactivo Ayuda a Los Simpson a conseguir su objetivo y salvar al pueblo!",
    descFirstLetter: "E",
    observations:
      "uestro escape room de los Simpsons es una fantástica opción para volver a los decorados de una de nuestras series favoritas. Siéntete como Homer en un día normal y ayuda a salvar el pueblo de Springfield en nuestro escape room de los Simpsons.",
    observationsFirstLetter: "N",
    service: "P3",
  },
];

export const rules = [
  "Niños sólos + 13 años",
  "Si no puedes asistir, avisa con un margen de DOS DÍAS",
  "Es obligatorio llegar 5 minutos antes del inicio del juego",
  "Por favor, revisa bien las horas y fechas antes de reservar",
  "Nuestros escenarios de escape no necesitan ropa específica",
  "Si tienes un bono regalo, eres un afortunado",
  "¡Los enigmas no cambian, las salas se juegan sólo una vez!",
];
