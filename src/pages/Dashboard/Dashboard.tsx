  import { useAuthStore } from "@/store/authStore/authStore";
  import "./Dashboard.css";


  const Dashboard = () => {
    const name = useAuthStore().name;


    return (
      <>
        <section id="adminDashboard" className="relative w-full flex">
          <h2>Bienvenido {name}</h2>
        </section>
      </>
    );
  };

  export default Dashboard;
