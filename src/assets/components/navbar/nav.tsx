import './nav.css'
import React from 'react'

function Navbar() {
  const logo = '/img/logo.png'

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h2>NextMatch</h2>
      </div>

      <ul className="navbar-links">
        <li><a href="/">Início</a></li>
        <li><a href="/campeonatos">Campeonatos</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
