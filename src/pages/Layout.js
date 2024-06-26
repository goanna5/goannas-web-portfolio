import "../App.css";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation.js";

const Layout = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};

export default Layout;