import { useAuthStore } from "@/store/authStore/authStore";
import "./Dashboard.css";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import { useEffect } from "react";
import { getAllMessages } from "@/api";

const Dashboard = () => {
  const name = useAuthStore().name;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const mensajes = await getAllMessages();
        console.log(mensajes);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <>
      <section id="adminDashboard" className="relative w-full flex">
        <h2>Bienvenido {name}</h2>
      </section>
    </>
  );
};

export default Dashboard;
