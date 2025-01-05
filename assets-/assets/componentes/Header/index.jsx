import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className='menu'>
        <img src='../../../public/assets/logo.png'/>
        <nav>
          <ul>
            <li><Link className='btn' to='/'>Inicio</Link></li>
            <li><Link className='btn' to='/sabores'>Sabores</Link></li>
            <li><Link className='btn' to='/sobre'>Sobre</Link></li>
            <li><span className="material-symbols-outlined  dark-mode">
            wb_sunny
            </span></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}