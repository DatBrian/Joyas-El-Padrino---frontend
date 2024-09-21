import FormContact from "@/components/Forms/FormContact/FormContact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section id="contact" className="p-8 md:p-16 lg:p-32">
      <h1
        id="contactTitle"
        className="font-medium text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-16 lg:mb-20"
      >
        Contáctanos
      </h1>
      <div id="contactForm" className="flex justify-center">
        <FormContact />
      </div>
    </section>
  );
};

export default ContactPage;
