import { useState } from 'react'
import logo from '../public/img/logo.png'
import './App.css'
import Button from '../src/assets/components/button/button'
import Navbar from '../src/assets/components/navbar/nav' 

function App() {
  return (
    <>
      <Navbar />

      <div>
        <a href="#" target="_blank">
          <img src={logo} className="logo" alt="Logo principal" />
        </a>
      </div>

      <h1>Crie, Jogue e Conquiste!</h1>
      <p>Participe ou crie campeonatos online</p>

      <div className="button-container">
        <Button text="Criar Campeonato" />
        <Button text="Ver Campeonatos" link="/campeonatos"/>
      </div>
    </>
  )
}

export default App
