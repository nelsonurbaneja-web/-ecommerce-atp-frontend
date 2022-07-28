import { CartContext } from 'context/CartContext'
import { useContext, useMemo } from 'react'
import { formatPrice } from 'services/formatPrice'
import styles from './CartGrid.module.scss'
import ProductCartItem from 'components/Molecules/ProductCartItem/ProductCartItem'

const CartGrid = () => {
  const { state } = useContext(CartContext)

  const textWhatsApp = useMemo(() => {
    return (`Hola, quiero comprar *${state.cart.length}* producto(s).\n ${state.cart.map((product, key) => `${key + 1}. ${product.title} - ${formatPrice(product.price)}\n`)} \n Total: ${`*${formatPrice(state.cart.reduce((acc, product) => acc + product.price, 0))}*`}`)
  }, [state.cart])

  const handleClickWhatsapp = () => {
    window.open(`https://wa.me/584129625261?text=${encodeURIComponent(textWhatsApp)}`)
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
        <div className={styles.cart_total}>
          <p className="font-22 light mt-0 mb-15">Total: <span className="font-22 sm-bold c-black">{ formatPrice(state.cart.reduce((acc, product) => acc + product.price, 0 ))}</span></p>
        </div>
        <div className={styles.cart_total} >
          <button className="button primary" onClick={handleClickWhatsapp}>
            Completar pedido
          </button>
        </div>
      </div>
    </section>
  )
}

export default CartGrid