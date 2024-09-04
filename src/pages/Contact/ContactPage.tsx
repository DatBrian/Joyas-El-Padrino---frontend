import FormContact from "@/components/Contact/FormContact/FormContact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="p-32">
        <h1 id="contactTitle" className="font-medium text-5xl text-center mb-20">Contáctanos</h1>
        <div id="contactForm" className="flex w-full">
          <FormContact />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
