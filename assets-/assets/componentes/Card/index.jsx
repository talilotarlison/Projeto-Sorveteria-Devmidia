import React from 'react'
import './styles.css'

export default function Card(props) {
  return (
    <div className='card' key={props.key}>
      <img src={props.img} alt={props.nome}/>
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
    </div>
  )
}