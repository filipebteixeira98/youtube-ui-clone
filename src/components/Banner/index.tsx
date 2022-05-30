import styles from './styles.module.scss'

interface Props {
  url: string
  title: string
  album: string
  artist: string
}

export function Banner() {
  return (
    <section className={styles.banner__container}>
      <div className={styles.banner__content}>
        <span>Start radio from a song</span>
        <h2>Quick picks</h2>
        <div>
          <a href="#listen">
            <img
              src="https://images.genius.com/038c44a69f400cb317d469e4bdd0231e.1000x1000x1.png"
              alt="Album cover"
            />
          </a>
          <div>
            <strong>M4</strong>
            <span>Teto & Matuê</span>
            <span>M4</span>
          </div>
        </div>
        <div>
          <a href="#listen">
            <img
              src="https://studiosol-a.akamaihd.net/letras/272x272/albuns/e/9/b/1/1047941616175829.jpg"
              alt="Album cover"
            />
          </a>
          <div>
            <strong>Além do Dinheiro</strong>
            <span>Filipe Ret, Dallass & Ariel Donato</span>
            <span>Imaterial</span>
          </div>
        </div>
        <div>
          <a href="#listen">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f"
              alt="Album cover"
            />
          </a>
          <div>
            <strong>Sunflower (Spider-Man: Into the Spider-Verse)</strong>
            <span>Post Malone, Swae Lee &</span>
            <span>Spider-Man: Into the Spider-Verse</span>
          </div>
        </div>
        <div>
          <a href="#listen">
            <img
              src="https://s2.glbimg.com/mjhMXhUJZYvzK3RVO-O-eVm45AY=/620x520/smart/e.glbimg.com/og/ed/f/original/2021/11/30/malvadao3-2.png"
              alt="Album cover"
            />
          </a>
          <div>
            <strong>Malvadão 3</strong>
            <span>Xamã, Gustah & Neo Beats</span>
            <span>Malvadão 3</span>
          </div>
        </div>
      </div>
    </section>
  )
}
