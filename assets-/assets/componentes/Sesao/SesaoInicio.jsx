import React from 'react'
import styles from './SesaoInicio.module.css'

export default function SesaoInicio() {
  return (
    <main>
      <section className='box-banner'>
        <div className={styles.banner}>
          <h1>Sorverte Artesanal</h1>
        </div>
      </section>
      {/*teste sessao 01*/}
      <section className={styles.boxSessaoInicio}>
        <div className={styles.box1}>
          <img src='../../../public/assets/banner-sabores.jpg' />
        </div>
        <div className={styles.box2}>
          <h1> Lorem Ipsum has</h1>
          <h2> Lorem Ipsum has reader will be </h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </div>
      </section>
      {/*teste sessao 02*/}
      <section className={styles.boxSessaoInicio}>
        <div className={styles.box2}>
          <h1> Lorem Ipsum has</h1>
          <h2> Lorem Ipsum has reader will be </h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </div>
        <div className={styles.box1}>
          <img src='../../../public/assets/banner-sabores.jpg' />
        </div>
      </section>
      {/*teste sessao 03*/}
      <section className={styles.boxSessaoInicio}>
        <div className={styles.box1}>
          <img src='../../../public/assets/banner-sabores.jpg' />
        </div>
        <div className={styles.box2}>
          <h1> Lorem Ipsum has</h1>
          <h2> Lorem Ipsum has reader will be </h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </div>
      </section>
    </main>
  )
}