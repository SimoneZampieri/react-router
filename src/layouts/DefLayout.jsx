import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function DefLayout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefLayout;
