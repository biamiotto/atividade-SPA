import Card from "../../components/Card/Card";
import styles from "./Home.module.css";

function Home() {
  const destaques = [
    { id: 1, emoji: "🐶", titulo: "Cachorrinhos",    descricao: "Companheiros leais esperando por um lar cheio de amor." },
    { id: 2, emoji: "🐱", titulo: "Gatinhos",        descricao: "Fofuros independentes que vão conquistar seu coração." },
    { id: 3, emoji: "🐰", titulo: "Coelhinhos",      descricao: "Pelotinhas de fofura esperando um cantinho especial." },
    { id: 4, emoji: "🐹", titulo: "Hamsters",        descricao: "Pequeninos cheios de energia para alegrar seu dia." },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <span className={styles.heroEmoji}>🐾</span>
        <h1 className={styles.titulo}>Patinhas do Coração</h1>
        <p className={styles.subtitulo}>
          Todo animal merece um lar quentinho e cheio de amor. <br />
          Encontre seu novo melhor amigo aqui! 🌸
        </p>
        <a href="/animais" className={styles.botao}>Ver animais disponíveis 🐾</a>
      </div>

      <h2 className={styles.secaoTitulo}>Quem está esperando por você?</h2>
      <div className={styles.grid}>
        {destaques.map((item) => (
          <Card
            key={item.id}
            emoji={item.emoji}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;