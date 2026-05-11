import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/",            label: "🏠 Home" },
    { to: "/sobre",       label: "💛 Sobre" },
    { to: "/animais",     label: "🐾 Animais" },
    { to: "/contato",     label: "📩 Contato" },
    { to: "/depoimentos", label: "⭐ Histórias" },
  ];

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        🐾 <span>Patinhas do Coração</span>
      </Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? styles.ativo : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;