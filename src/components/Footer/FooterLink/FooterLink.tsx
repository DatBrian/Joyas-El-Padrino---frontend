import "./FooterLink.css"

interface FooterLinkProps {
  icon: string;
  link: string;
}

const FooterLink = ({ icon, link }: FooterLinkProps) => {
  return (
    <>
      <a  href={link}>
        <i className={`footerIcon bx ${icon}`}></i>
      </a>
    </>
  );
};
export default FooterLink;
