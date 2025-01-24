import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="conatainer p-2 ">
      <ul className="nav d-flex justify-content-between">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            Chi Siamo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="nav-link">
            Lista Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
