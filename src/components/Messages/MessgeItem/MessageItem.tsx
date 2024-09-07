import React from "react";
import { MessageItemProps } from "./MessageItemProps.types";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const previewLength = 50;
  return (
    <li
      className={`p-2 border-b last:border-b-0 ${
        message.readed ? "bg-gray-50" : "bg-blue-50"
      }`}
    >
      <button className="flex flex-col md:flex-row items-start md:items-center text-gray-900 w-full gap-4 md:gap-6">
        <div className="flex flex-col gap-2 flex-grow">
          <p className="font-semibold text-base md:text-lg">{message.nombre}</p>
          <p className="text-sm text-gray-600">
            {truncateText(message.mensaje, previewLength)}
          </p>
        </div>
        <span className="text-xs text-gray-500 mt-2 md:mt-0">
          {new Date(message.createdAt).toLocaleDateString()}
        </span>
      </button>
    </li>
  );
};

export default MessageItem;
