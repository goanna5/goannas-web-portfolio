import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Navigation from "../Navigation.js";

const Layout = () => {
  return (
    <>
    {/*
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  */}
  <Navigation />

      <Outlet />
    </>
  )
};

export default Layout;
