import styles from "./Card.module.css";

function Card({ emoji, titulo, descricao }) {
  return (
    <div className={styles.card}>
      <div className={styles.emoji}>{emoji}</div>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}

export default Card;