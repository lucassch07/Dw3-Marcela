import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './App'
import Campeonatos from './Campeonatos'
import Sobre from './Sobre'
import Contato from './Contato'
import CriarCampeonato from './CriarCampeonato'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/criar" element={<CriarCampeonato />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
