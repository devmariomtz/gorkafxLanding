const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#2e4b57] to-[#0a0e1e] shadow-[0_4px_8px_#0000001a] px-[10%] py-12 text-center">
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start font-light text-2xl">
        <img
          src="src/assets/gorkafxlogo.png"
          alt=""
          className="md:w-[15%] w-[35%] "
        />
        <p>Fondéate con Éxito</p>
      </div>

      <div className="py-12 gap-4 md:flex-row flex-col flex justify-between text-start">
        <div className="row-span-3">
          <p className="text-2xl font-bold mb-5">OFERTA DE PRODUCTO</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Plan Básico
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Plan Avanzado
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Plan Premium
              </a>
            </li>
          </ul>
        </div>
        <div className="row-span-3">
          <p className="text-2xl font-bold mb-5">EMPRESA</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#aboutus"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Nuestro Servicios
              </a>
            </li>
            <li>
              <a
                href="#planes"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Planes
              </a>
            </li>
          </ul>
        </div>
        <div className="row-span-3">
          <p className="text-2xl font-bold mb-5">CLIENTES</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#contact"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="https://www.gorkafx.com/static/media/GorkaFX%20%7C%20Politica%20de%20Privacidad.5228bb9e7b1c05180274.pdf"
                className="hover:underline text-2xl font-light underline-offset-4 decoration-1"
              >
                Información Legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-white border-[0.1em] w-full" />
      <div className="flex justify-center md:justify-end py-4 gap-4">
        <a
          href="https://www.youtube.com/channel/UCZLA_cKZbs-M_WW-PQNXW6Q"
          target="_blank"
        >
          <img src="src/assets/yt.png" alt="" className="w-9" />
        </a>
        <a href="https://www.instagram.com/gorkafx/" target="_blank">
          <img src="src/assets/ig.png" alt="" className="w-9" />
        </a>
        <a href="https://www.tiktok.com/@gorkafx" target="_blank">
          <img src="src/assets/tiktok.png" alt="" className="w-9" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
