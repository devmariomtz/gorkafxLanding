import comunidad from "/src/assets/comunidad.png";
import estrategia from "/src/assets/estrategia.png";
import materialExclusivo from "/src/assets/material-exclusivo.png";
import mentoría from "/src/assets/mentoria.png";
import online from "/src/assets/online.png";

const Services = () => {
  return (
    <div className="bg-[#000b17] pt-4" id="services">
      <h2 className="text-4xl md:text-6xl w-[50%] text-end">
        Nuestros <span className="font-bold">servicios</span>
      </h2>
      <hr className="bg-[#2d91d4] w-[50%] h-2 border-t-0" />
      <div className="flex flex-wrap gap-5 md:gap-16 justify-center p-6">
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={estrategia} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">ESTRATEGIA VALIDADA</h3>
            <p className="font-light">
              Te guiaremos a través de una estrategia probada y validada.
            </p>
          </div>
        </div>
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={materialExclusivo} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">MATERIAL EXCLUSIVO</h3>
            <p className="font-light">
              Lectura y materiales exclusivos por nuestro equipo.
            </p>
          </div>
        </div>
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={mentoría} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">MENTORÍA PERSONALIZADA</h3>
            <p className="font-light">
              Recibirás mentorías con preguntas y orientación personalizada.
            </p>
          </div>
        </div>
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={comunidad} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">COMUNIDAD ACTIVA</h3>
            <p className="font-light">
              Comunidad apasionada de estudiantes y traders.
            </p>
          </div>
        </div>
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={materialExclusivo} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">ESTRATEGIAS EXCLUSIVAS</h3>
            <p className="font-light">
              Diseñado para igualar nuestra propia altura de conocimiento.
            </p>
          </div>
        </div>
        <div className="md:w-[27vw] md:h-[25vw] w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col items-center justify-center text-center">
          <img src={online} alt="" className="w-[35%]" />
          <div className="text-xl p-4">
            <h3 className="font-bold">CURSO DESDE CERO</h3>
            <p className="font-light">Aprende los fundamentos del trading.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
