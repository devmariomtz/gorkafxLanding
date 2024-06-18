import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Trayectoria from "./components/Trayectoria";
import Services from "./components/Services";
import Planes from "./components/Planes";

function App() {
  return (
    <div className="text-white bg-fixed bg-center bg-cover bg-no-repeat bg-hero">
      <NavBar />
      <Hero />
      <Form />
      <Trayectoria />
      <Services />
      <Planes />
    </div>
  );
}

export default App;
