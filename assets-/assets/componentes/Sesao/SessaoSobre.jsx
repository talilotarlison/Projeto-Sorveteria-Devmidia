import React from 'react'
import styles from './SessaoSobre.module.css'

export default function SesaoSobre() {
  return (
    <main>
      <section className={styles.boxBanner}>
        <div className={styles.banner}>
          <h1>Nossa Soveteria</h1>
        </div>
      </section>

      <section className={styles.boxSobre}>
        <h1>Sobre Nos</h1>
        <h2>Conheça nossa Soveteria</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam neque, congue nec volutpat ut, sollicitudin ut lorem. Nulla egestas mi ut risus hendrerit mattis. Nullam ut ornare felis, non convallis lectus. Praesent lobortis porttitor magna, vitae interdum turpis pellentesque nec. Cras ac accumsan nisi, ac efficitur nulla. Pellentesque a justo justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla efficitur laoreet ante, sit amet hendrerit leo sollicitudin sed. Vestibulum feugiat erat tellus, nec rutrum mi fringilla feugiat. Praesent imperdiet condimentum justo, at facilisis metus facilisis consectetur.</p>

        <p>  Praesent felis eros, auctor et lobortis a, molestie eget mi. Aenean elit purus, euismod sed mauris ut, dignissim condimentum quam. Quisque imperdiet tincidunt vehicula. Maecenas sollicitudin et nibh at tempus. Nam eleifend nisl vitae cursus scelerisque. Nunc sagittis, odio id gravida placerat, ex lorem cursus ipsum, sed tristique magna dui sed erat. Nunc consequat hendrerit est, ac rutrum est malesuada eu. Praesent placerat justo sit amet mollis fringilla. Nam euismod tellus ut nisi elementum sollicitudin. Curabitur fermentum leo nec varius mollis. Etiam tristique eget diam a dignissim.

          Pellentesque quis efficitur libero. Suspendisse egestas massa nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ante odio, fermentum ut mi quis, vehicula varius ante. Praesent lacus turpis, scelerisque non ex vel, molestie finibus mauris. Aliquam vitae quam vitae erat varius malesuada. Nullam gravida, enim ac bibendum pulvinar, enim risus porttitor lectus, id efficitur justo quam ut velit. Sed vulputate enim eu ante pretium suscipit. Sed sed pulvinar nisi. Ut eget dui ante. Nulla mollis commodo quam, nec luctus arcu rutrum quis. Proin dui elit, commodo ac porttitor vitae, pharetra quis urna.</p>
      </section>
      <section className={styles.boxSobreImg}>
        <img src='../../../public/assets/sobre-image.jpg' />
        <img src='../../../public/assets/banner-sabores.jpg' />
      </section >

    </main>
  )
}