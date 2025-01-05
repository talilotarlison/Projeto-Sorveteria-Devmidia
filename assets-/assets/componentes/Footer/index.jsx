import React from 'react'
import './styles.css'

export default function Footer() {
  return (
    <footer>
      <div className='info'>
        <div className='img'>
          <img src='../../../public/assets/logo.png' />
        </div>
        <div className='endereco'>
          <h1>ENDEREÇO:</h1>
          <p> more recently with</p>
          <p> more recently with</p>
          <p> more recently with</p>
        </div>
        <div className='contato'>
          <h1>Contato:</h1>
          <p> more recently with</p>
          <p> more recently with</p>
          <p> more recently with</p>
        </div>
        <div className='horario'>
          <h1>Horario:</h1>
          <p> more recently with</p>
          <p> more recently with</p>
          <p> more recently with</p>
        </div>
      </div>
      <div className='direitos'>
        <h1>Todos os direitos reservados a <span className='devmidia'>Devmidia </span> 2023 - By Talilo.</h1>
      </div>

    </footer>
  )
}