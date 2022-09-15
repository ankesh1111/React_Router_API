import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/products",
    title: "Products"
  }
];

function Navbar() {
  return (
    <div>
      {links.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={item.path}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;
