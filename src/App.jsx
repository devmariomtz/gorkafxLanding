import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Trayectoria from "./components/Trayectoria";

function App() {
  return (
    <React.Fragment>
      <div className="text-white bg-fixed bg-center bg-cover bg-no-repeat bg-hero">
        <NavBar />
        <Hero />
        <Form />
        <Trayectoria />
      </div>
    </React.Fragment>
  );
}

export default App;
