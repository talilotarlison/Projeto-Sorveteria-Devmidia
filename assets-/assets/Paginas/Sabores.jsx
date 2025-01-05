import './Sabores.module.css'
import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import SesaoSabores from '.././componentes/Sesao/SessaoSabores.jsx'
import Card from '.././componentes/Card'
import dados from '.././data/dados.jsx'

const numbers = [1, 2, 3, 4, 5];

export default function Sabores() {
  return (
    <div>
      <Header />
      <SesaoSabores>
        {dados.map((item) =>
          <Card nome={item.nome} descricao={item.descricao} img={item.img} key={index} />
        )}
      </SesaoSabores>

      <Footer />

    </div>
  )
}
