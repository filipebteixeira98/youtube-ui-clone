import styles from './styles.module.scss'

import { data } from '../../data'

export function Banner() {
  return (
    <section className={styles.wrapper__container}>
      <div className={styles.wrapper__content}>
        <span>Start radio from a song</span>
        <h2>Quick picks</h2>
        {data.map((item) => (
          <div key={item.url} className={styles.wrapper__item}>
            <a href={`#listen-${item.title}`}>
              <img src={item.url} alt="Album cover" />
            </a>
            <div className={styles.wrapper__item__data}>
              <strong>{item.title}</strong>
              <div>
                <span>{item.artist}</span>
                <span>{item.album}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
