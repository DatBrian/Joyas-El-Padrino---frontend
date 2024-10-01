import "./Footer.css";
import FooterLink from "./FooterLink/FooterLink";

const Footer = () => {
  const copyEmailToClipboard = () => {
    const email = "joyaselpadrino18k@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err);
      });
  };

  return (
    <>
      <footer id="Footer" className="text-center text-white w-full py-10">
        <div className="flex flex-col">
          <h1 id="footerTitle" className="text-4xl my-8">
            Síguenos
          </h1>
          <div id="footerButtons" className="w-full flex gap-14 justify-center">
            <FooterLink
              icon="bxl-whatsapp"
              link="https://wa.me/message/ZQ6K6BTQIEXLG1"
            />
            <FooterLink
              icon="bxl-facebook-circle"
              link="https://www.facebook.com/profile.php?id=61566494825880&mibextid=qi2Omg&rdid=Pxnoblrf4GlZucVK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhjxqisVdCYBbsq6C%2F%3Fmibextid%3Dqi2Omg"
            />
            <FooterLink
              icon="bxl-instagram"
              link="https://www.instagram.com/joyaselpadrino18k/"
            />
            <FooterLink
              icon="bx-envelope"
              onClick={copyEmailToClipboard}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
