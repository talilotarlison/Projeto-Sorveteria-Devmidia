import './styles.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '.././Paginas/Home.jsx'
import Sobre from '.././Paginas/Sobre.jsx'
import Sabores from '.././Paginas/Sabores.jsx'
import Header from '.././componentes/Header'

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/sabores' element={<Sabores />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
