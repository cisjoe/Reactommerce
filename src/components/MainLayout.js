import { Outlet } from "react-router";
import Nav from "./Navbar";

export default function MainLayout() {
  return (
    <>
      <header>
        <div className="header-logo"></div>
        <Nav />
      </header>
      <Outlet />
      <footer>
        <span>made with love by</span>
        <i> Joe</i>
      </footer>
    </>
  );
}
