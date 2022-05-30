import styles from './styles.module.scss'

import backgroundImg from '../../assets/background.png'

export function Footer() {
  return (
    <>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__content}>
          <img src={backgroundImg} alt="" />
          <div>
            <h2>Tell us which artists you like</h2>
            <p>We'll create an experience just for you</p>
            <button type="button">Let's go</button>
          </div>
        </div>
      </div>
    </>
  )
}
