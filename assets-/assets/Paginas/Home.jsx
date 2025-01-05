import './Home.module.css'
import React from 'react'
import Header from '../componentes/Header'
import SesaoInicio from '.././componentes/Sesao/SesaoInicio.jsx'
import Footer from  '../componentes/Footer'


export default function Home() {
  return (
    <div>
      <Header />
      <SesaoInicio />
     <Footer/>
    </div>
  )
}
