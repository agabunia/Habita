import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { navItems } from "./header.config";

export default function HeaderNav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}