import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={`max-width ${styles.footer}`}>
        <p className="mxy-0 font-14 c-gray"> © 2020 - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer