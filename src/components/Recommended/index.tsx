import { RecommendedVideo } from '../RecommendedVideo'

import styles from './styles.module.scss'

export function Recommended() {
  return (
    <section className={styles.wrapper__container}>
      <h1>Recommended music video</h1>
      <div>
        <RecommendedVideo
          url="https://i.ytimg.com/vi/ckfjX0B-KfM/hqdefault.jpg"
          title="Algumas frases"
          artist="L7NNON"
          views="36M views"
        />
        <RecommendedVideo
          url="https://ffmusic.icu/images/alan-walker-faded_loytr20p/109.jpg"
          title="Faded"
          artist="Alan Walker"
          views="760M views"
        />
        <RecommendedVideo
          url="https://i.ytimg.com/vi/8aOQ_ghG7VQ/0.jpg"
          title="Balão (feat. Dallass)"
          artist="Orochi"
          views="172M views"
        />
      </div>
    </section>
  )
}
