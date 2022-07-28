import { useMemo, useContext } from 'react'
import styles from './CardTotalCart.module.scss'
import { CartContext } from 'context/CartContext'
import { formatPrice } from 'services/formatPrice'
import Link from 'next/link'

const CardTotalCart = () => {
  const { state } = useContext(CartContext)

  const textWhatsApp = useMemo(() => {
    return (`Hola, quiero comprar *${state.cart.length}* producto(s).\n ${state.cart.map((product, key) => `${key + 1}. ${product.title} - ${formatPrice(product.price)}\n`)} \n Total: ${`*${formatPrice(state.cart.reduce((acc, product) => acc + product.price, 0))}*`}`)
  }, [state.cart])

  const handleClickWhatsapp = () => {
    window.open(`https://wa.me/584129625261?text=${encodeURIComponent(textWhatsApp)}`)
  }

  return (
    <div className={styles.cart_total_container}>
      <div className={styles.cart_total}>
        <header className={styles.cart_total_header}>
          <span>Total del carrito</span>
        </header>
        <div className={styles.cart_total_content}>
          <p className="font-16 light mt-0 mb-15">Subtotal: <span className="font-16 sm-bold c-black">{ formatPrice(state.cart.reduce((acc, product) => acc + product.price, 0 ))}</span></p>
          <p className="font-16 light mt-0 mb-15">Total: <span className="font-16 sm-bold c-black">{ formatPrice(state.cart.reduce((acc, product) => acc + product.price, 0 ))}</span></p>
          <button className="button primary block" onClick={handleClickWhatsapp}>
            Completar pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardTotalCart