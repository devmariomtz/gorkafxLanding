import React from "react";
import Formulario from "./Formulario";

const Form = () => {
  return (
    <React.Fragment>
      <h2 className="p-7 bg-[#000b17] text-white text-3xl md:text-6xl text-center">
        ¡Gracias por tu interés en nuestra formación!
      </h2>
      {/* agregar una horizontal line */}
      <hr className="bg-[#2d91d4] w-100 h-2 border-t-0" />
      <div className="md:flex  w-full p-10 h-auto md:h-[75vh] justify-center items-center text-white bg-[#000b17]">
        <p className="md:text-4xl md:w-[50%] leading-normal text-2xl text-balance md:text-start text-center">
          Actualmente, las plazas están<span className="font-semibold m-0 p-0 "> agotadas.</span> Te invitamos a
          rellenar nuestro<span className="font-semibold m-0 p-0"> formulario de preinscripción. </span>De esta manera, recibirás una notificación tan pronto como se abran
          nuevas plazas.
        </p>
        <Formulario />
      </div>
    </React.Fragment>
  );
};

export default Form;
