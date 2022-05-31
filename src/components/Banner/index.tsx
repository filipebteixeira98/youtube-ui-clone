import styles from './styles.module.scss'

import { data } from '../../data'

interface BannerProps {
  url: string
  title: string
  album: string
  artist: string
}

export function Banner({ url, title, album, artist }: BannerProps) {
  return (
    <section className={styles.wrapper__container}>
      <div className={styles.wrapper__content}>
        <span>Start radio from a song</span>
        <h2>Quick picks</h2>
        {data.map((item) => (
          <div>
            <a href={`#listen-${item.title}`}>
              <img src={item.url} alt="Album cover" />
            </a>
            <div>
              <strong>{item.title}</strong>
              <span>{item.artist}</span>
              <span>{item.album}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
