const MessageItem = ({ message }) => {
  return (
    <li
      className={`p-2 border-b last:border-b-0 ${
        message.read ? "bg-gray-50" : "bg-blue-50"
      }`}
    >
      <button className="flex items-center text-gray-900">
        <div className="flex-grow">
          <p className="font-semibold">{message.nombre}</p>
          <p className="text-sm text-gray-600">...</p>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(message.date).toLocaleDateString()}
        </span>
      </button>
    </li>
  );
};
export default MessageItem;
