import "./FooterLink.css";

interface FooterLinkProps {
  icon: string;
  link?: string;
  onClick?: () => void;
}

const FooterLink = ({ icon, link, onClick }: FooterLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <i className={`footerIcon bx ${icon} cursor-pointer`}></i>
    </a>
  );
};

export default FooterLink;
