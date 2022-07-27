import React, { createContext } from "react";
import { Product } from "types";
import { CartReducerAction } from "./CartProvider"; // Mover a su carpeta actions

type InitialStateType = {
  cart: Product[]
}

const INITIAL_STATE : InitialStateType = {
  cart: []
}

export const CartContext = createContext<{state: InitialStateType, dispatch: React.Dispatch<CartReducerAction>}>({
  state: INITIAL_STATE,
  dispatch: () => null
});
