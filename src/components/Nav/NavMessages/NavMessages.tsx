import { Button } from "@/components/ui/button";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";

const NavMessages = () => {
  const setFilterType = useMessagesStore((state) => state.setFilterType);

  const handleFilterChange = (filterType: string) => {
    setFilterType(filterType);
  };

  return (
    <>
      <nav className="static w-full flex justify-between items-center text-white h-20 px-8 md:px-32 drop-shadow-md z-10">
        <div className="flex items-center gap-28 font-semibold text-base h-full">
          <Button
            className="text-white hover:text-gray-300"
            onClick={() => handleFilterChange("all")}
          >
            Todos
          </Button>
          <Button
            className="text-white hover:text-gray-300"
            onClick={() => handleFilterChange("unread")}
          >
            No Leídos
          </Button>
          <Button
            className="text-white hover:text-gray-300"
            onClick={() => handleFilterChange("read")}
          >
            Leídos
          </Button>
        </div>
      </nav>
    </>
  );
};

export default NavMessages;
