import SideBarAdmin from "@/components/Nav/SideBarAdmin/SideBarAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import { useEffect } from "react";
import { getAllMessages } from "@/api";
import { useSellersStore } from "@/store/sellersStore/sellersStore";
import { getAllSellers } from "@/api/sellers";

const AdminLayout = () => {
  const setAllMessages = useMessagesStore((state) => state.setAllMessages);
  const setFilteredMessages = useMessagesStore(
    (state) => state.setFilteredMessages
  );
  const setAllSellers = useSellersStore((state) => state.setAllSellers);

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

    const fetchSellers = async () => {
      try {
        const sellers = await getAllSellers();
        setAllSellers(sellers?.data);
      } catch (error) {
        console.error("Error fetching sellers:", error);
      }
    };

    fetchMessages();
    fetchSellers();
  }, [setAllMessages, setAllSellers, setFilteredMessages]);

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
