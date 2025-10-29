import Navbar from '../src/assets/components/navbar/nav'
import './Campeonatos.css'

function Campeonatos() {
  const campeonatos = [
    {
      id: 1,
      nome: 'League of Legends - Torneio das Lendas',
      img: '/img/lol.jfif',
      descricao: 'Mostre suas habilidades e conquiste o topo no Rift!',
    },
    {
      id: 2,
      nome: 'Valorant - Ultimate Cup',
      img: '/img/vava.jpg',
      descricao: 'Prove sua mira e suba de elo neste torneio insano.',
    },
    {
      id: 3,
      nome: 'FIFA 25 - Copa dos Craques',
      img: '/img/fifa.jpg',
      descricao: 'Mostre seu talento nos gramados digitais!',
    },
    {
      id: 4,
      nome: 'CS2 - Major Brasil',
      img: '/img/cs2.jpg',
      descricao: 'A mira é fria e o rush é tático. Bora pra trocação!',
    },
    {
      id: 5,
      nome: 'Fortnite - Battle Royale Cup',
      img: '/img/fortnite.jpg',
      descricao: 'Construa, lute e seja o último em pé!',
    },
    {
      id: 6,
      nome: 'Apex Legends - Legends Showdown',
      img: '/img/apex.jpg',
      descricao: 'Escolha sua lenda e domine a arena!',
    },
    {
      id: 7,
      nome: 'Dota 2 - The International Qualifier',
      img: '/img/dota.jpg',
      descricao: 'Forme sua equipe e lute pelo título máximo!',
    },
    {
      id: 8,
      nome: 'Overwatch 2 - Heroic Clash',
      img: '/img/overwatch.jpg',
      descricao: 'Trabalhe em equipe e mostre suas habilidades heroicas!',
    }
  ]

  return (
    <>
      <Navbar />

      <div className="campeonatos-container">
        <h1>Lista de Campeonatos</h1>
        <p>Escolha seu jogo e participe dos torneios online!</p>

        <div className="cards-grid">
          {campeonatos.map((c) => (
            <div key={c.id} className="card">
              <img src={c.img} alt={c.nome} />
              <div className="card-info">
                <h3>{c.nome}</h3>
                <p>{c.descricao}</p>
                <button className="btn-participar">Participar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Campeonatos
