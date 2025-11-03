import Navbar from '../src/assets/components/navbar/nav'
import './Contato.css'

function Contato() {
  return (
    <>
      <Navbar />
      <section className="contato-container">
        <h1>Entre em Contato</h1>
        <p>Tem dúvidas, sugestões ou quer colaborar com o projeto? Fale conosco!</p>

        <form className="contato-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Digite sua mensagem..." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  )
}

export default Contato
