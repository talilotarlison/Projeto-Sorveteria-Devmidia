import './Sobre.module.css'
import React from 'react'
import Header from '../componentes/Header'
import Footer from  '../componentes/Footer'
import SesaoSobre from '.././componentes/Sesao/SessaoSobre.jsx'


export default function Sobre() {
  return (
    <div>
      <Header />
      <SesaoSobre/>
      <Footer/>
    </div>
  )
}
