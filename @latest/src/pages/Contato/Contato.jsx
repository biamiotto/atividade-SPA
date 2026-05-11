import styles from "./Contato.module.css";

function Contato() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Entre em contato 📩</h1>
      <p className={styles.subtitulo}>
        Quer adotar ou saber mais? A gente adora conversar! 🌸
      </p>

      <div className={styles.wrapper}>
        <div className={styles.infos}>
          <h2>Nossos contatos</h2>
          <p>📧 patinhasdocoracao@email.com</p>
          <p>📱 (19) 99999-9999</p>
          <p>📍 Rua das Flores, 123 – São Paulo/SP</p>
          <p>🕐 Seg a Sex: 9h às 18h</p>
          <p>🕐 Sábados: 9h às 14h</p>
        </div>

        <form className={styles.form}>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" />

          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />

          <label>Assunto</label>
          <select>
            <option>Quero adotar um animal</option>
            <option>Quero ser voluntária(o)</option>
            <option>Quero fazer uma doação</option>
            <option>Outro assunto</option>
          </select>

          <label>Mensagem</label>
          <textarea placeholder="Escreva sua mensagem aqui..." rows={5} />

          <button type="button" className={styles.botao}>
            Enviar mensagem 💌
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;