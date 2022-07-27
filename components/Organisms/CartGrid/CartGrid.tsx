import { CartContext } from 'context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { formatPrice } from 'services/formatPrice'
import styles from './CartGrid.module.scss'
import { TiDelete } from 'react-icons/ti'
import { updateLocalStorage } from 'services/addProductToCartToLocalStorage'

const CartGrid = () => {
  const { state, dispatch } = useContext(CartContext)
  console.log(state.cart)

  const handleDeleteProductToCart = (id : number) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id
    })
    updateLocalStorage(state.cart.filter(product => product.id !== id))
  }
  
  return (
    <section className={styles.cart_grid_container}>
      <div className={`max-width`}>
        <h1 className="mb-25">Mis compras</h1>
        <div className={styles.cart_grid}>
          {state.cart.map(product => 
            <div className={styles.cart_item} key={product.id}>
              <div className={styles.cart_icon_delete} title="Eliminar" onClick={() => handleDeleteProductToCart(product.id)}>
                <TiDelete size={30} color="#ff4d4f"/>
              </div>
              <div className={styles.cart_image}>
                <Image src={product.image} alt={product.title} width={100} height={100} title={product.title} />
              </div>
              <div className={styles.cart_content}>
                <Link href={`/producto/${product.slug}`} ><p title={product.title} className="font-14 mt-0 mb-10 bold text-ellipsis-3 cursor_p">{product.title}</p></Link>
                <p className="font-14 mt-0 mb-10 light text-ellipsis-3">{product.description}</p>
                <p className="font-16 bold mt-0 mb-15">{ formatPrice(product.price) }</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.cart_total}>
          <p className="font-22 light mt-0 mb-15">Total: <span className="font-22 sm-bold c-black">{ formatPrice(state.cart.map(product => product.price).reduce((acc, ele) => acc + ele, 0))}</span></p>
        </div>
        <div className={styles.cart_total}>
          <button className="button primary">Completar pedido</button>
        </div>
      </div>
    </section>
  )
}

export default CartGrid