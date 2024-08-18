import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NavBar from "./components/Nav/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
    </>
  );
}

export default App;