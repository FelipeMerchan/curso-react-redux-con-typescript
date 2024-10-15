import { createContext } from "react";
import { type CartState } from "./cartReducer";
import { type CartProduct } from "../interface";

export interface CartContextProps {
  state: CartState;
  addToCart: (item: CartProduct) => void;
  clearCart: () => void;
  removeFromCart: (item: CartProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);
