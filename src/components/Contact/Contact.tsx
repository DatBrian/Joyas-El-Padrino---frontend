import FormContact from "./FormContact/FormContact";

const Contact = () => {
  return (
    <>
      <section id="contact" className="p-32">
        <h1 className="font-medium text-5xl text-center mb-20">Contáctanos</h1>
        <div className="flex gap-60">
          <FormContact />
        </div>
      </section>
    </>
  );
};

export default Contact;
