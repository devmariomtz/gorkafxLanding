import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Trayectoria from "./components/Trayectoria";
import Services from "./components/Services";
import Planes from "./components/Planes";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gorkafxW from "/src/assets/gorkafxW.png";
function App() {
  return (
    <React.Fragment>

      <FloatingWhatsApp
        phoneNumber="34634444575"
        accountName="GorkaFx 📈"
        avatar={gorkafxW}
        statusMessage="Fondeante con éxito"
        chatMessage="Hola! 👋🏻
En que puedo ayudarte."
        placeholder="Escribe un mensaje..."
      />
      <div className="text-white bg-fixed bg-center bg-cover bg-no-repeat bg-hero">
        <NavBar />
        <Hero />
        <Toaster />
        <Form />
        <Trayectoria />
        <Services />
        <Planes />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
