import SideBarAdmin from "@/components/Nav/SideBarAdmin/SideBarAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import { useEffect } from "react";
import { getAllMessages } from "@/api";
import { useUsersStore } from "@/store/usersStore/usersStore";
import { getAllSellers, getUsersBySeller } from "@/api/users";
import { useAuthStore } from "@/store/authStore/authStore";

const AdminLayout = () => {
  const setAllMessages = useMessagesStore((state) => state.setAllMessages);
  const setFilteredMessages = useMessagesStore(
    (state) => state.setFilteredMessages
  );
  const setAllSellers = useUsersStore((state) => state.setAllSellers);
  const setAllClients = useUsersStore((state) => state.setAllClients);
  const id = useAuthStore((state) => state.id);

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

    const fetchUsers = async () => {
      try {
        const sellers = await getAllSellers();
        const clients = await getUsersBySeller(id);
        setAllSellers(sellers?.data);
        setAllClients(clients);
      } catch (error) {
        console.error("Error fetching sellers:", error);
      }
    };

    fetchMessages();
    fetchUsers();
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
