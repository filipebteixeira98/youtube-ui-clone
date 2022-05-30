import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiCast } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <div>
          <a href="#home">
            <img src={logoImg} alt="Youtube Music" />
          </a>
        </div>
        <div>
          <nav>
            <div className={styles.header__nav}>
              <a href="#home">Home</a>
              <a href="#explore">Explore</a>
              <a href="#library">Library</a>
              <div>
                <AiOutlineSearch size={20} />
                <a href="#search">Search</a>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <a href="#cast">
            <FiCast size={24} />
          </a>
          <a href="#options">
            <BsThreeDotsVertical size={24} />
          </a>
          <button type="button">SIGN IN</button>
        </div>
      </div>
    </header>
  )
}
