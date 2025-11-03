import Navbar from '../src/assets/components/navbar/nav'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <Navbar />
      <section className="sobre-container">
        <h1>Sobre o Site</h1>
        <p>
          Este projeto foi criado para conectar jogadores e organizadores de torneios.
          Aqui, você pode criar campeonatos personalizados, participar de disputas online
          e acompanhar sua evolução em tempo real.
        </p>
        <p>
          A plataforma foi desenvolvida com foco em simplicidade, performance e acessibilidade —
          tudo para que a experiência de jogo e competição seja rápida e envolvente.
        </p>
      </section>
    </>
  )
}

export default Sobre
