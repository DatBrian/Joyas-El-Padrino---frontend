import MessagesList from "@/components/Messages/MessagesList/MessagesList";
import NavMessages from "@/components/Nav/NavMessages/NavMessages";
import "./Messages.css"

const Messages = () => {
  return (
    <>
      <NavMessages />
      <section
        id="messages"
        className="flex flex-col flex-grow bg-gray-100 p-4"
      >
        <div className="flex-grow overflow-auto">
          <MessagesList/>
        </div>
      </section>
    </>
  );
};

export default Messages;
