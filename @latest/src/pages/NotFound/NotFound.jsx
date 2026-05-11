import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.container}>
      <p className={styles.emoji}>🐾</p>
      <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
      <p className={styles.texto}>
        Parece que essa pagina fugiu como um gatinho esperto... 🐱
      </p>
      <Link to="/" className={styles.botao}>
        Voltar para o início 🏠
      </Link>
    </section>
  );
}

export default NotFound;