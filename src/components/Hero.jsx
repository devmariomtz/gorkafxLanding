import { useState } from "react";
import thumbnailImage from "/src/assets/thumbnail.jpeg"; // Asegúrate de usar la ruta correcta
import playButtonImage from "/src/assets/play.png"; // Asegúrate de usar la ruta correcta

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [size, setSize] = useState([560, 315]);
  const handlePlay = () => {
    setIsPlaying(true);
    var thumbnail = document.getElementById("thumbnail");
    // get the size of the thumbnail
    var width = thumbnail.offsetWidth;
    var height = thumbnail.offsetHeight;
    // set the size of the iframe
    setSize([width, height]);
  };

  return (
    <div className="bg-transparent flex items-center justify-center text-white flex-col p-4">
      <p className="text-4xl lg:text-8xl font-extrabold mb-4">
        FONDÉATE CON ÉXITO
      </p>
      <div className="flex justify-center items-center lg:w-[50%]">
        {isPlaying ? (
          <iframe
            width={size[0]}
            height={size[1]}
            src="https://www.youtube-nocookie.com/embed/hWZ_BU_gkcM?si=t90VUNeUrWYXlBAn"
            title="YouTube video player"
            frameBorder="0"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            referrerPolicy="strict-origin-when-cross-origin"
            // allowfullscreen
            allowFullScreen
          ></iframe>
        ) : (
          <div
            id="thumbnail"
            className="relative cursor-pointer"
            onClick={handlePlay}
          >
            <img src={thumbnailImage} alt="Thumbnail" className="" />
            <img
              src={playButtonImage}
              alt="Play Button"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
        )}
      </div>
      <div className="text-center space-y-4">
        <p className="text-4xl font-semibold">
          Aprende a tradear y fondear tus cuentas
        </p>
        <p className="text-3xl">
          Plazas <span className="font-bold text-[#2d91d4]">CERRADAS</span>{" "}
          temporalmente
        </p>
        <button className="text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        // al hacer click en el botón, redirigir a la seción de contacto
        onClick={() => window.location.assign("#contact")}
        >
          ¡QUIERO SABER MÁS!
        </button>
      </div>
    </div>
  );
};

export default Hero;
