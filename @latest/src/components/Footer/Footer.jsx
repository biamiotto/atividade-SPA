import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.emoji}>🐶🐱🐰🐹🐾</p>
      <p className={styles.texto}>
        Feito por <strong>Lívia & Miotto</strong>
      </p>
      <p className={styles.sub}>
        © 2025 Patinhas do Coração — Todo amor do mundo para os animaizinhos 🌸
      </p>
    </footer>
  );
}

export default Footer;