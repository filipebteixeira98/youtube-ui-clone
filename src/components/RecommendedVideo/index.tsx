import styles from './styles.module.scss'

interface RecommendedVideoProps {
  url: string
  title: string
  artist: string
  views: string
}

export function RecommendedVideo({
  url,
  title,
  artist,
  views,
}: RecommendedVideoProps) {
  return (
    <div className={styles.wrapper__container}>
      <div className={styles.wrapper__image}>
        <img src={url} alt="Thumbnail" />
      </div>
      <div className={styles.wrapper__content}>
        <strong>{title}</strong>
        <span>{artist}</span>
        <span>{views}</span>
      </div>
    </div>
  )
}
