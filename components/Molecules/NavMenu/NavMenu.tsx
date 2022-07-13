import React from 'react'
import styles from './NavMenu.module.scss'
import { HiHeart, HiStar } from 'react-icons/hi'

const NavMenu = () => {
  return (
    <nav>
      <ul className={`font-22 bebas ${styles.main_menu}`}>
        {/* <li className={styles.main_menu_item}><a title='Favoritos'>Favoritos</a> <HiStar /> </li> */}
        <li className={styles.main_menu_item}><a title='Lo mas buscado'>Lo mas buscado</a><HiHeart/></li>
      </ul>
    </nav>
  )
}

export default NavMenu