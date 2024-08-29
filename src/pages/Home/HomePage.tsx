import { Button } from "@/components/ui/button";
import "./HomePage.css";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import NavBar from "@/components/Nav/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <section className="mt-20 h-max bg-black flex overflow-hidden flex-col">
        <div
          id="banner"
          className="relative w-screen bg-cover bg-no-repeat bg-center"
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 flex flex-col justify-center text-center items-center h-full gap-5">
            <h1 className="text-3xl text-white">
              Elegancia y Calidad en cada Detalle
            </h1>
            <h3 className="text-xl text-white">
              Creaciones personalizadas que reflejan tu estilo y esencia.
              Encuentra la joya perfecta, hecha a la medida para ti.
            </h3>
            <Button>Consigue la Tuya</Button>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
