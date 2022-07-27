
import IconCart from 'components/Atoms/IconCart/IconCart';
import IconToggle from 'components/Atoms/IconToggle/IconToggle';
import InputSearch from 'components/Atoms/InputSearch/InputSearch';
import Logo from 'components/Atoms/Logo/Logo';
import { CartContext } from 'context/CartContext';
// import NavMenu from 'components/Molecules/NavMenu/NavMenu';
import Link from 'next/link';
import { useContext } from 'react';
import styles from './Header.module.scss'

const Header = () => {
  
  return (
    <header className={`${styles.header_container}`}>
      <div className={`max-width ${styles.header}`}>
        <div className={styles.header_toggle}>
          <IconToggle />
        </div>
        {/* <div className={styles.header_nav}>
          <NavMenu />
        </div> */}
        <Logo />
        <div className={styles.header_search_container}>
          <InputSearch />
          <Link href="/carrito">
            <div>
              <IconCart />
            </div>
          </Link>
        </div>
        <Link href="/carrito">
          <div className={styles.header_shopping_movil}>
            <IconCart />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;
