import { Link } from "react-router-dom";

const NavMessages = () => {
  return (
    <>
      <nav className="fixed w-full flex justify-between items-center text-white h-20 px-8 md:px-32 drop-shadow-md z-10">
        <div className="hidden xl:flex items-center gap-28 font-semibold text-base h-full">
          <Link to={"/admin/messages/reads"}>Todos</Link>
          <Link to={"/admin/messages/unreads"}>No Leídos</Link>
          <Link to={"/admin/messages/reads"}>Leídos</Link>
          <Link to={"/admin/messages/archived"}>Archivados</Link>
        </div>
      </nav>
    </>
  );
};

export default NavMessages;
