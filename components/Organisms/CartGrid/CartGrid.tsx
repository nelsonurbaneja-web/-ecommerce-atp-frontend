import { CartContext } from 'context/CartContext'
import React, { useContext } from 'react'

const CartGrid = () => {
  const cartContext = useContext(CartContext)

  console.log('cartContext', cartContext.state)
  return (
    <div>CartGrid</div>
  )
}

export default CartGrid