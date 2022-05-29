import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'

import logoImg from '../../assets/logo.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <img src={logoImg} alt="Youtube Music" />
        <nav>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#library">Library</a>
          <a href="#search">Search</a>
        </nav>
        <div>
          <AiOutlineSearch size={24} />
          <BsThreeDotsVertical size={24} />
          <button type="button">SIGN IN</button>
        </div>
      </div>
    </header>
  )
}
