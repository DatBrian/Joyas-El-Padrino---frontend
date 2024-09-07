import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import MessageItem from "../MessgeItem/MessageItem";

const MessagesList = () => {
  const messages = useMessagesStore((state) => state.filteredMessages);

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl text-black font-semibold mb-4">
        Inbox
      </h2>
      <div className="overflow-x-auto">
        <ul className="space-y-2">
          {messages.length === 0 ? (
            <li className="text-center text-gray-500">
              No messages to display.
            </li>
          ) : (
            messages.map((message) => (
              <MessageItem key={message._id} message={message} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default MessagesList;
