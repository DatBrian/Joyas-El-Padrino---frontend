import SideBarAdmin from "@/components/Nav/SideBarAdmin/SideBarAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
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
