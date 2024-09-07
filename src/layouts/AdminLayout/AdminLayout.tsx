import SideBarAdmin from "@/components/Nav/SideBarAdmin/SideBarAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import { useEffect } from "react";
import { getAllMessages } from "@/api";

const AdminLayout = () => {
  const setAllMessages = useMessagesStore((state) => state.setAllMessages);
  const setFilteredMessages = useMessagesStore(
    (state) => state.setFilteredMessages
  );

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const mensajes = await getAllMessages();
        setAllMessages(mensajes?.data);
        setFilteredMessages(mensajes?.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [setAllMessages, setFilteredMessages]);

  return (
    <>
      <div>
        <SideBarAdmin />
      </div>
      <div id="adminOutlet">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
