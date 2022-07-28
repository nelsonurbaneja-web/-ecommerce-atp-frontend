import { CartContext } from 'context/CartContext'
import { useContext } from 'react'
import styles from './CartGrid.module.scss'
import ProductCartItem from 'components/Molecules/ProductCartItem/ProductCartItem'
import CardTotalCart from 'components/Molecules/CardTotalCart/CardTotalCart'
import Link from 'next/link'

const CartGrid = () => {
  const { state } = useContext(CartContext)

  if(state.cart.length === 0) {
    return (
      <section className={styles.cart_grid_container}>
        <div className={`max-width`}>
          <h1 className="mb-25">Mis compras</h1>
          <p className="font-16 bold mt-0 mb-15">No tienes productos en tu carrito</p>
          <Link href="/"><button className="button primary">Quiero ver productos</button></Link>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.cart_grid_container}>
      <div className={`max-width`}>
        <h1 className="mb-25">Mis compras</h1>
        <div className={styles.cart_grid}>
          {state.cart.map(product => 
            <ProductCartItem product={product} key={product.id} />
          )}
        </div>
        <CardTotalCart />
      </div>
    </section>
  )
}

export default CartGrid