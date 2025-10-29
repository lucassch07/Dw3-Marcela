import { useNavigate } from 'react-router-dom'
import './button.css'
import React from 'react'

function Button({ text, link }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (link) navigate(link)
  }

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button

