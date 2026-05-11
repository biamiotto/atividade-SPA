import styles from "./Animais.module.css";

function Animais() {
  const animais = [
    { id: 1, emoji: "🐶", nome: "Bolinha",  tipo: "Cachorro", idade: "2 anos",   desc: "Super brincalhão e adora crianças. Vacinado e castrado." },
    { id: 2, emoji: "🐱", nome: "Mimi",     tipo: "Gato",     idade: "1 ano",    desc: "Docinha e calma. Adora colo e ronronar na janela." },
    { id: 3, emoji: "🐶", nome: "Thor",     tipo: "Cachorro", idade: "3 anos",   desc: "Leal e protetor. Ótimo companheiro para passeios." },
    { id: 4, emoji: "🐱", nome: "Mingau",   tipo: "Gato",     idade: "6 meses",  desc: "Filhotinho curioso e cheio de energia. Muito fofo!" },
    { id: 5, emoji: "🐰", nome: "Pompom",   tipo: "Coelho",   idade: "1 ano",    desc: "Pelagem branquinha e olhinhos vermelhos. Ama cenoura!" },
    { id: 6, emoji: "🐹", nome: "Nutella",  tipo: "Hamster",  idade: "8 meses",  desc: "Pequenina e ativa. Corre na rodinha a noite toda!" },
    { id: 7, emoji: "🐶", nome: "Pipoca",   tipo: "Cachorro", idade: "4 meses",  desc: "Filhote adorável, ainda aprendendo as regras da casa." },
    { id: 8, emoji: "🐱", nome: "Simba",    tipo: "Gato",     idade: "2 anos",   desc: "Independente mas carinhoso. Adora brinquedos de pena." },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Animais para adoção 🐾</h1>
      <p className={styles.subtitulo}>
        Todos vacinados, vermifugados e cheios de amor pra dar! 💖
      </p>
      <div className={styles.grid}>
        {animais.map((a) => (
          <div key={a.id} className={styles.card}>
            <div className={styles.emojiBox}>{a.emoji}</div>
            <div className={styles.info}>
              <h3>{a.nome}</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>{a.tipo}</span>
                <span className={styles.tag}>{a.idade}</span>
              </div>
              <p>{a.desc}</p>
              <button className={styles.botao}>Quero adotar! 🏠</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Animais;