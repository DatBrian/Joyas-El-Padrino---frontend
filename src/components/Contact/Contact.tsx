import FormContact from "./FormContact/FormContact";

const Contact = () => {
  return (
    <>
      <section id="contact" className="p-32">
        <h1 className="font-medium text-5xl text-center mb-20">Contáctanos</h1>
        <div className="flex gap-60">
          <FormContact />
          <div
            id="info"
            className="mt-10 bg-slate-600 h-max p-10 rounded-md flex flex-col gap-7"
          >
            <div id="whatsapp" className="flex gap-3">
              <i className="bx bxl-whatsapp bx-lg"></i>
              <h2 className="self-center">+57 302 297 0098</h2>
            </div>
            <div id="correo" className="flex gap-3">
              <i className="bx bx-envelope bx-lg"></i>
              <h2 className="self-center">vikard.2005@hotmail.com</h2>
            </div>
            <div id="facebook" className="flex gap-3">
              <i className="bx bxl-facebook-circle bx-lg"></i>
              <h2 className="self-center">@Facebook.com</h2>
            </div>
            <div className="flex gap-3">
              <i className="bx bxl-instagram bx-lg"></i>
              <h2 className="self-center">@Instagram.com</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
