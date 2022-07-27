import React, { useContext } from 'react'
import IconShoppingBag from 'components/Atoms/IconShoppingBag/IconShoppingBag';
import { CartContext } from 'context/CartContext';
import styles from './IconCart.module.scss'

const IconCart = () => {
  const { state } = useContext(CartContext)

  return (
    <div className={styles.icon_cart_container}>
      {state.cart.length > 0 && <span className={styles.icon_cart_count}>{state.cart.length}</span>}
      <IconShoppingBag />
    </div>
  )
}

export default IconCart