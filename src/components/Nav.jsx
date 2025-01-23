import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Lista Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
