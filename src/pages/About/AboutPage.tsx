import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <section id="about">
        <h1 id="about-title" className="font-medium text-5xl text-center mb-20">
          Sobre Nosotros
        </h1>
        <div className=" flex flex-col gap-4">
          <p>
            Ubicados en Bucaramanga, nuestra joyería se dedica a ofrecer piezas
            de alta calidad con un toque personal. Nos enorgullece brindar un
            servicio atento y profesional, garantizando que cada cliente reciba
            la atención y el asesoramiento que merece.
          </p>
          <p>
            Nuestro equipo de vendedores está disponible para ayudarte a
            encontrar o diseñar la joya perfecta para ti. Agenda ya una cita
            para una consulta personalizada. Estamos comprometidos en hacer
            realidad tus sueños con la mejor calidad y un servicio excepcional.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
