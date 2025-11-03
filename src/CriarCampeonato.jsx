import { useState, useEffect } from 'react'
import Navbar from '../src/assets/components/navbar/nav'
import './CriarCampeonato.css'

function CriarCampeonato() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')
  const [campeonatos, setCampeonatos] = useState([])

  // Carrega campeonatos existentes (simula o "GET" do backend)
  useEffect(() => {
    const dados = localStorage.getItem('campeonatos')
    if (dados) setCampeonatos(JSON.parse(dados))
  }, [])

  // Simulação do "POST" — backend TypeScript fake
  const criarCampeonato = (e) => {
    e.preventDefault()

    if (!nome || !descricao || !imagem) {
      alert('Preencha todos os campos!')
      return
    }

    const novo = {
      id: campeonatos.length + 1,
      nome,
      img: imagem,
      descricao,
    }

    const atualizado = [...campeonatos, novo]

    // Simulação de persistência backend (localStorage = "banco")
    localStorage.setItem('campeonatos', JSON.stringify(atualizado))
    setCampeonatos(atualizado)

    // Limpa campos
    setNome('')
    setDescricao('')
    setImagem('')

    alert('Campeonato criado com sucesso!')
  }

  return (
    <>
      <Navbar />

      <section className="criar-container">
        <h1>Criar Novo Campeonato</h1>
        <p>Preencha os campos abaixo para adicionar um novo torneio ao sistema.</p>

        <form className="criar-form" onSubmit={criarCampeonato}>
          <input
            type="text"
            placeholder="Nome do campeonato"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da imagem (ex: /img/lol.jfif)"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <textarea
            placeholder="Descrição do campeonato"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>

          <button type="submit">Salvar Campeonato</button>
        </form>

        <div className="preview">
          <h2>Prévia dos Campeonatos</h2>
          <div className="preview-grid">
            {campeonatos.map((c) => (
              <div key={c.id} className="preview-card">
                <img src={c.img} alt={c.nome} />
                <h3>{c.nome}</h3>
                <p>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CriarCampeonato
