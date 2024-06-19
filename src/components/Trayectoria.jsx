import gorkafx from "/src/assets/gorkafx.png";

const Trayectoria = () => {
  return (
    <div className="bg-[#000b17]">
      <div className="bg-trayectoria bg-center bg-cover md:flex">
        <div
          className="flex flex-col gap-14 md:gap-16 md:pl-16 items-center justify-center"
          id="aboutus"
        >
          <h2 className="text-5xl md:text-6xl underline text-center font-black">
            TRAYECTORIA AL ÉXITO
          </h2>
          <p className="text-5xl text-center font-extrabold">
            EXPERIENCIA Y EDUCACIÓN FINANCIERA
          </p>
          <p className="p-4 text-2xl md:text-4xl font-light text-justify leading-snug">
            Somos un equipo de traders con más de 4 años de experiencia en los
            mercados, hemos dedicado nuestro tiempo a perfeccionar nuestras
            habilidades. Nos apasiona la educación financiera y estamos
            comprometidos a guiarte en tu viaje hacia el éxito.
          </p>
        </div>
        <img src={gorkafx} alt="" className="hidden md:block md:w-[50%]" />
      </div>
    </div>
  );
};

export default Trayectoria;
