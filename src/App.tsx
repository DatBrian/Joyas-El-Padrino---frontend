import { RouterProvider } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/NavBar";
import router from "./routes/Router";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
