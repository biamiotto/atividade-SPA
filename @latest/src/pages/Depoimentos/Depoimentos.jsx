import styles from "./Depoimentos.module.css";

function Depoimentos() {
  const historias = [
    {
      id: 1,
      nome: "Ana Clara",
      animal: "Bolinha 🐶",
      texto: "Adotei o Bolinha há 6 meses e minha vida mudou completamente! Ele acorda a casa toda com sua energia. Não me arrependo nem um segundo!",
      estrelas: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      nome: "Família Santos",
      animal: "Mimi 🐱",
      texto: "A Mimi era tímida no começo, mas hoje dorme na cama com a gente. É impossível imaginar a casa sem ela. Obrigada, Patinhas do Coração!",
      estrelas: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      nome: "Pedro H.",
      animal: "Pompom 🐰",
      texto: "Nunca imaginei que um coelho seria tão carinhoso. O Pompom veio pra preencher um espaço que eu nem sabia que estava vazio.",
      estrelas: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      nome: "Júlia e Lucas",
      animal: "Thor 🐶",
      texto: "O Thor é o protetor da nossa família. Nossos filhos adoram brincar com ele. Adotar foi a melhor decisão que tomamos!",
      estrelas: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Histórias de amor ⭐</h1>
      <p className={styles.subtitulo}>
        Cada adoção é uma história linda que começa aqui. Confira o que nossas famílias dizem! 💖
      </p>

      <div className={styles.grid}>
        {historias.map((h) => (
          <div key={h.id} className={styles.card}>
            <p className={styles.estrelas}>{h.estrelas}</p>
            <p className={styles.texto}>"{h.texto}"</p>
            <div className={styles.autor}>
              <span className={styles.avatar}>🧡</span>
              <div>
                <strong>{h.nome}</strong>
                <p>Adotou: {h.animal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p>Tem uma história pra contar? Manda pra gente! 🌸</p>
        <a href="/contato" className={styles.botao}>Compartilhar minha história</a>
      </div>
    </section>
  );
}

export default Depoimentos;