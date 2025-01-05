import React from 'react'
import styles from './SessaoSabores.module.css'


export default function SesaoSabores({children}) {
  return (
    <main>
      <section className={styles.boxBanner}>
        <div className={styles.banner}>
          <h1>Nossos Sabores</h1>
        </div>
      </section>
      <h1 className={styles.titulo}>Nossos Sabores</h1>
       <section className={styles.cards}>
          
         {children}
         </section>
    </main>
  )
}