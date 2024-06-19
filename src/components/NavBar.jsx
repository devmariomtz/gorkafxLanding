import { useState } from "react";
import gorkafxlogo from "/src/assets/gorkafxlogo.png";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-black");
      navbar.classList.remove("bg-transparent");
      navbar.classList.remove("text-white");
    } else {
      navbar.classList.remove("bg-black");
      navbar.classList.add("bg-transparent");
    }
  });

  return (
    <nav id="navbar" className="z-10 bg-transparent p-4 top-0 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={gorkafxlogo}
          alt=""
          className="w-[7%]"
          onClick={() => (window.location.href = "/")}
        />
        {/* <div className="text-white text-2xl font-bold">MyApp</div> */}
        <div className="hidden md:block w-[75%] text-center text-xl">
          <ul className="flex justify-between">
            <li className="flex items-center">
              <a
                href="#aboutus"
                className="hover:underline underline-offset-8"
              >
                ¿QUIÉNES SOMOS?
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#services"
                className="hover:underline underline-offset-8"
              >
                NUESTROS SERVICIOS
              </a>
            </li>
            <li className="flex items-center">
              <a href="#planes" className="hover:underline underline-offset-8">
                PLANES<br></br> PERSONALIZADOS
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
          id="menu"
          name="menu"
          aria-label="menu"
          title="menu"
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#aboutus" className="block px-4 py-2 text-white">
            ¿QUIÉNES SOMOS?
          </a>
          <a href="#services" className="block px-4 py-2 text-white">
            NUESTROS SERVICIOS
          </a>
          <a href="#planes" className="block px-4 py-2 text-white">
            PLANES<br></br> PERSONALIZADOS
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
