import IconShoppingBag from 'components/Atoms/IconShoppingBag/IconShoppingBag';
import IconToggle from 'components/Atoms/IconToggle/IconToggle';
import InputSearch from 'components/Atoms/InputSearch/InputSearch';
import Logo from 'components/Atoms/Logo/Logo';
import NavMenu from 'components/Molecules/NavMenu/NavMenu';
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
        <IconShoppingBag />
      </div>
      <div className={styles.header_shopping_movil}>
        <IconShoppingBag />
      </div>
    </div>
    </header>
  )
}

export default Header;
