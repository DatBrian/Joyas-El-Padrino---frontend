import "./Footer.css";
import FooterLink from "./FooterLink/FooterLink";

const Footer = () => {
  return (
    <>
      <footer id="Footer" className="text-center text-white w-full">
        <div className="flex flex-col">
          <h1 id="footerTitle" className="text-4xl my-8">
            Síguenos
          </h1>
          <div id="footerButtons" className="w-full flex gap-14 justify-center">
            <FooterLink
              icon="bxl-whatsapp"
              link="https://wa.me/message/ZQ6K6BTQIEXLG1"
            ></FooterLink>
            <FooterLink
              icon="bxl-facebook-circle"
              link="https://wa.me/message/ZQ6K6BTQIEXLG1"
            ></FooterLink>
            <FooterLink
              icon="bxl-instagram"
              link="https://instagram"
            ></FooterLink>
            <FooterLink icon="bx-envelope" link="https:/mail"></FooterLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
