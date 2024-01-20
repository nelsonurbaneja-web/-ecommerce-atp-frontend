import { CartContext } from 'context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { updateLocalStorage } from 'services/addProductToCartToLocalStorage'
import { TiDelete } from 'react-icons/ti'
import styles from './ProductCartItem.module.scss'
import { Product } from 'types'
import { formatPrice } from 'services/formatPrice'

interface ProductCartItemProps {
  product: Product
}

const ProductCartItem = ({ product } : ProductCartItemProps) => {
  const { state, dispatch } = useContext(CartContext)

  const handleDeleteProductToCart = (id : number) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id
    })
    updateLocalStorage(state.cart.filter(product => product.id !== id))
  }
  

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_icon_delete} title="Eliminar" onClick={() => handleDeleteProductToCart(product.id)}>
        <TiDelete size={30} color="#ff4d4f"/>
      </div>
      <div className={styles.cart_image}>
        <Image src={product.image[0]} alt={product.title} width={100} height={100} title={product.title} />
      </div>
      <div className={styles.cart_content}>
        <Link href={`/producto/${product.slug}`} ><p title={product.title} className="font-18 mt-0 mb-10 sm-bold text-ellipsis-3 c-bold cursor_p">{product.title}</p></Link>
        <p className="font-14 mt-0 mb-10 light text-ellipsis-3">{product.description}</p>
        <p className="font-16 sm-bold mt-0 mb-15">{ formatPrice(product.price) }</p>
      </div>
    </div>
  )
}

export default ProductCartItem