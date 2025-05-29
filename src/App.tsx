import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
