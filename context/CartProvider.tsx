import { useEffect, useReducer } from "react"
import { Product } from "types"
import { CartContext } from "./CartContext"

interface CartProviderProps {
  children: React.ReactNode
}

interface CartReducerState {
  cart: Product[]
}

const INITIAL_STATE : CartReducerState = {
  cart: []
}

export type CartReducerAction = {
  type: 'ADD_PRODUCT',
  payload: Product
} | {
  type: 'INIT_STORE',
  payload: Product[]
} | {
  type: 'REMOVE_PRODUCT',
  payload: number
}

const cartReducer = (state: CartReducerState, action: CartReducerAction) => {
  switch(action.type) {
    case 'INIT_STORE':
    return {
      ...state,
      cart: action.payload
    }  
    case 'ADD_PRODUCT':
    return {
      ...state,
      cart: [...state.cart, action.payload]
    }  
    case 'REMOVE_PRODUCT':
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== action.payload)
    }
  }
}

export const CartProvider = ({ children } : CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE) 
  
  useEffect(() => { // Sacar a _app.tsx
    if(typeof window !== 'undefined') {
      if (JSON.parse(window.localStorage.getItem("products") as string) ) { 
        dispatch({
          type: "INIT_STORE",
          payload: JSON.parse(window.localStorage.getItem("products") as string)
        });
      }
    }
  }, []);

  return (
    <CartContext.Provider value={{state, dispatch}}>
      { children }
    </CartContext.Provider>
  )
}