import styles from "./Sobre.module.css";

function Sobre() {
  const valores = [
    { emoji: "🎯", titulo: "Missão",  texto: "Conectar animais resgatados a famílias amorosas, garantindo que cada bichinho encontre um lar seguro e feliz." },
    { emoji: "🌟", titulo: "Visão",   texto: "Ser referência em adoção responsável, reduzindo o número de animais abandonados na nossa cidade." },
    { emoji: "💖", titulo: "Valores", texto: "Amor, respeito, responsabilidade e empatia com todos os seres vivos — humanos e animais!" },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Sobre nós 💛</h1>
      <p className={styles.descricao}>
        O <strong>Patinhas do Coração</strong> nasceu do amor de duas amigas pelos animais.
        Cansadas de ver tantos bichinhos nas ruas sem um lar, criamos este espaço para facilitar
        a adoção responsável e ajudar esses pequenos a encontrar famílias que os amem de verdade. 🐾
      </p>

      <div className={styles.grid}>
        {valores.map((v) => (
          <div key={v.titulo} className={styles.card}>
            <span className={styles.emoji}>{v.emoji}</span>
            <h3>{v.titulo}</h3>
            <p>{v.texto}</p>
          </div>
        ))}
      </div>

      <div className={styles.fundadoras}>
        <h2>Nossas fundadoras 🌸</h2>
        <div className={styles.dupla}>
          <div className={styles.pessoa}>
            <span>👧</span>
            <strong>Lívia</strong>
            <p>Apaixonada por gatos e cuidados veterinários.</p>
          </div>
          <div className={styles.pessoa}>
            <span>👧</span>
            <strong>Miotto</strong>
            <p>Protetora de cães e mestre dos cachorros fofos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;