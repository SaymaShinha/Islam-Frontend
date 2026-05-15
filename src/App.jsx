import { Outlet } from "react-router";
import "./App.css";
import NavbarHeader from "./Components/NavbarHeader.jsx";
import WebFooter from "./Components/WebFooter.jsx";

function App() {
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <WebFooter></WebFooter>
      </div>
    </>
  )
}

export default App
