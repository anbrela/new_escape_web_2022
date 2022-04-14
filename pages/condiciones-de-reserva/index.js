import Header from "../../components/Home/Header";
import { CustomHead } from "../../components/CustomHead";

const Condiciones = () => {
  return (
    <div>
      <Header navActive={true} />
      <CustomHead
        title="Condiciones de reserva"
        description="Estas son las condiciones de reserva de Hype Escape Room. Antes de reservar es importante conocerlas bien para que no haya ningun tipo de malentendido. Revise las condiciones antes de reservar "
      />
      <div className="py-20 px-5">
        <h1 className="text-3xl font-bold">Condiciones de reserva</h1>
        <ol className="mt-4">
          <p>
            Al realizar su reserva en
            <a href="www.escapismolugo.com" className="text-green-500">
              {" "}
              www.escapismolugo.com
            </a>{" "}
            está aceptando las siguientes condiciones generales:
          </p>
          <li className="mt-4">
            <li className="mt-2">
              <h3 className="text-lg font-medium">1.1 INTEGRANTES DEL GRUPO</h3>
            </li>

            <p className="text-sm">
              Los grupos deben estar formados por un mínimo de 2 jugadores y un
              máximo de 6 jugadores. Hasta un máximo de 2 niños o niñas, los
              menores de 5 años (inclusive) no cuentan como jugadores, por lo
              tanto tampoco pagan. Debido a la dificultad de las pruebas, los
              menores de 13 años deben jugar acompañados por al menos un adulto.
              El equipo de Hype Escape Room podrá solicitar DNI, NIE o libro de
              familia para asegurarnos de que se cumple esta condición.
            </p>
          </li>

          <li className="space-y-2">
            <li className="mt-2">
              <h3 className="text-lg font-medium">1.2. ACCESO</h3>
            </li>

            <p className="text-sm">
              Es necesario llegar puntuales a la hora de reserva. Se recomienda
              llegar con 10 o 5 minutos de antelación, ya que no podrá entrar
              nadie antes de que los trabajadores terminen las labores de
              planificación del juego. Si llegáis con más de 10 minutos de
              retraso, se procederá a la cancelación de la reserva.
            </p>
            <p className="text-sm">
              En este caso no se devolverá la fianza abonada. Los teléfonos
              móviles, cámaras, portátiles, tablets, grabadoras, papeles,
              lápices, llaves, linternas, herramientas de cualquier tipo, comida
              y bebida o cualquier otro elemento que no sea vital para alguno de
              los jugadores, no están permitidos dentro de las salas. Sus
              efectos personales deberán guardarse en los espacios designados
              y/o bajo el cuidado y vigilancia del personal de Hype Escape Room.
            </p>

            <p className="text-sm">
              Hype Escape Room se reserva el derecho de admisión si el usuario:
              Acude bajo los efectos del alcohol, se presenta en estado de
              embriaguez o cualquier tipo de drogas u otras sustancias
              psicotrópicas que alteran la mente, acude con falta de aseo
              personal, porta cualquier objeto susceptible de causar daño a
              personas o cosas, manifiesta actitudes violentas, ofensivas o
              alborotadoras que provoquen o inciten a cualquier desorden en las
              instalaciones. Cualquier tipo de amenaza, actitudes o
              comportamientos agresivos u ofensivos hacia los trabajadores será
              motivo de expulsión inmediata. La empresa Hype Escape Room, se
              reserva el derecho de usar los datos de los clientes para
              denunciar si la situación lo requiere.
            </p>
          </li>

          <li className="space-y-2">
            <li className="mt-2">
              <h3 className="text-lg font-medium">
                1.3. SUSPENSIÓN DE LA ACTIVIDAD
              </h3>
            </li>

            <p className="text-sm">
              El equipo de Hype Escape Room podrá cancelar o interrumpir el
              juego en cualquier momento en caso de que algún participante se
              comporte de manera inadecuada a criterio del personal, o se niegue
              a cumplir las normas o las instrucciones de los mismos. En este
              caso no se tendrá el derecho a la devolución del pago abonado.
            </p>

            <p className="text-sm">
              En caso de fallo técnico, imprevisto de fuerza mayor o
              indisposición del trabajador que impidan el desarrollo de la
              actividad, Hype Escape Room se verá obligado a suspenderla. El
              consumidor será avisado mediante e-mail o teléfono indicados en su
              reserva con la mayor antelación posible.
            </p>

            <p className="text-sm">
              En caso de que las complicaciones extraordinarias explicadas
              anteriormente se produzcan durante una partida en curso, los
              jugadores podrán reanudar su juego otro día a su elección (según
              disponibilidad) desde el punto en que se hayan visto interrumpidos
              y sin coste extra alguno. Hype Escape Room cuenta con seguro para
              posibles accidentes ocurridos en sus instalaciones y para un
              máximo de 6 participantes.
            </p>
          </li>

          <li className="space-y-2 mt-5">
            <h2 className="text-lg font-bold">
              2. POLÍTICA DE RESERVAS Y PAGOS:
            </h2>

            <li className="mt-2">
              <h3 className="text-lg font-medium">2.1. RESERVAS</h3>
            </li>

            <p className="text-sm">
              Todas las reservas se deben realizar mediante el formulario
              situado en cada una de las páginas de nuestros juegos. Dentro del
              formulario se podrá elegir entre las fechas y horarios
              disponibles.
            </p>

            <p className="text-sm">
              Es necesario cubrir todos los campos obligatorios para efectuar
              correctamente la reserva. En caso de que los datos de contacto
              aportados por el usuario sean erróneos o falsos (nombre, teléfono
              o e-mail), Hype Escape Room no se responsabiliza de los problemas
              derivados de no poder contactar con el usuario para confirmar la
              reserva, para informar de novedades o de imprevistos relacionados
              con la reserva.
            </p>

            <p className="text-sm">
              Al reservar está usted aceptando que le enviemos un correo
              electrónico de confirmación de reserva con instrucciones sobre el
              juego, así como ponernos en contacto con usted mediante teléfono o
              whatsapp para gestionar incidencias con la reserva. Si no se ha
              recibido el e-mail automático de notificación de reserva, revise
              su bandeja de Spam. Si tampoco se encuentra allí, póngase en
              contacto con nosotros a través del formulario web en “Contacto” o
              en nuestro teléfono (+34 636 94 81 29).
            </p>
          </li>

          <li className="space-y-2 mt-5">
            <li className="mt-2">
              <h3 className="text-base font-medium">
                1.3. SUSPENSIÓN DE LA ACTIVIDAD
              </h3>
            </li>

            <p className="text-sm">
              El equipo de Hype Escape Room podrá cancelar o interrumpir el
              juego en cualquier momento en caso de que algún participante se
              comporte de manera inadecuada a criterio del personal, o se niegue
              a cumplir las normas o las instrucciones de los mismos. En este
              caso no se tendrá el derecho a la devolución del pago abonado.
            </p>

            <p className="text-sm">
              En caso de fallo técnico, imprevisto de fuerza mayor o
              indisposición del trabajador que impidan el desarrollo de la
              actividad, Hype Escape Room se verá obligado a suspenderla. El
              consumidor será avisado mediante e-mail o teléfono indicados en su
              reserva con la mayor antelación posible.
            </p>

            <p className="text-sm">
              En caso de que las complicaciones extraordinarias explicadas
              anteriormente se produzcan durante una partida en curso, los
              jugadores podrán reanudar su juego otro día a su elección (según
              disponibilidad) desde el punto en que se hayan visto interrumpidos
              y sin coste extra alguno. Hype Escape Room cuenta con seguro para
              posibles accidentes ocurridos en sus instalaciones y para un
              máximo de 6 participantes.
            </p>
          </li>

          <li className="space-y-3 mt-5">
            <li className="mt-2">
              <h3 className="text-base font-medium">2.2. PAGOS</h3>
            </li>

            <p className="text-sm">
              En el momento de la reserva se debe realizar un pago mínimo de 20€
              en concepto de fianza de reserva. Esta fianza se descontará del
              total del pago total a pagar el día del juego. El resto del pago
              se efectuará una vez empecéis el juego en la misma tarjeta
              bancaria con la que abonasteis la reserva.
            </p>

            <p className="text-sm">
              Si prefiere pagar en efectivo es importante que avise al llegar a
              nuestro local. De no ser así, se entenderá que acepta el pago por
              tarjeta y ese se validará. En caso de rechazo de tarjeta, se le
              comunicará al final de la partida y deberá pagar lo restante en
              efectivo.
            </p>

            <p className="text-sm">
              También puede abonar todo el importe al realizar la reserva, pero
              tenga en cuenta que no se le devolverá el dinero en caso de que
              disminuya la cantidad de miembros del equipo.
            </p>
          </li>

          <li className="space-y-3 mt-5">
            <li className="mt-2">
              <h3 className="text-base font-medium">
                1.3. SUSPENSIÓN DE LA ACTIVIDAD
              </h3>
            </li>

            <p className="text-sm">
              El equipo de Hype Escape Room podrá cancelar o interrumpir el
              juego en cualquier momento en caso de que algún participante se
              comporte de manera inadecuada a criterio del personal, o se niegue
              a cumplir las normas o las instrucciones de los mismos. En este
              caso no se tendrá el derecho a la devolución del pago abonado.
            </p>

            <p className="text-sm">
              En caso de fallo técnico, imprevisto de fuerza mayor o
              indisposición del trabajador que impidan el desarrollo de la
              actividad, Hype Escape Room se verá obligado a suspenderla. El
              consumidor será avisado mediante e-mail o teléfono indicados en su
              reserva con la mayor antelación posible.
            </p>

            <p className="text-sm">
              En caso de que las complicaciones extraordinarias explicadas
              anteriormente se produzcan durante una partida en curso, los
              jugadores podrán reanudar su juego otro día a su elección (según
              disponibilidad) desde el punto en que se hayan visto interrumpidos
              y sin coste extra alguno.
            </p>

            <p className="text-sm">
              Hype Escape Room cuenta con seguro para posibles accidentes
              ocurridos en sus instalaciones y para un máximo de 6
              participantes.
            </p>
          </li>

          <li className="space-y-3 mt-5">
            <li className="mt-2">
              <h3 className="text-base font-medium">
                3. POLÍTICA DE CAMBIOS Y/O CANCELACIONES:
              </h3>
            </li>

            <p className="text-sm">
              Si desea cancelar la reserva, debe hacerlo con 48 horas de
              antelación a la fecha y hora del juego mediante un correo
              electrónico a hola@escapismolugo.com o llamando al teléfono +34
              636 94 81 29. Le devolveremos el importe abonado. Si desea
              cancelar la reserva pero han pasado las 48 horas de antelación,
              puede recuperar parte del importe abonado, exceptuando los 20€ de
              fianza. Si el grupo no aparece, o no avisa de la cancelación
              perderá el importe total del precio de juego. Se le cobrará en la
              tarjeta el pago restante.
            </p>
          </li>

          <li>
            <li className="mt-2">
              <h3 className="text-base font-medium">4. TARIFAS</h3>
            </li>

            <p className="text-sm">
              Nuestras tarifas varían en función de la demanda de horarios o
              días. Consúltalas en el calendario de reserva.
            </p>
          </li>

          <li>
            <li className="mt-2">
              <h3 className="text-base font-medium">5. BONO REGALO</h3>
            </li>

            <p className="text-sm">
              Los bonos regalos tienen una caducidad de 6 meses desde la fecha
              de adquisición.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Condiciones;
