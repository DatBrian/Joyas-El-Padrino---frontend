import { useAuthStore } from "@/store/authStore/authStore";
import "./Dashboard.css";
import { useMessagesStore } from "@/store/messagesStore/messagesStore";
import { useEffect } from "react";
import { getAllMessages } from "@/api";

const Dashboard = () => {
  const name = useAuthStore().name;

  useEffect(() => {
    const mensajes = fetchMensajes();
    console.log(mensajes);
  });

  const fetchMensajes = async () => {
    const mensajes = await getAllMessages();
    return mensajes;
  };

  return (
    <>
      <section id="adminDashboard" className="relative w-full flex">
        <h2>Bienvenido {name}</h2>
      </section>
    </>
  );
};

export default Dashboard;
