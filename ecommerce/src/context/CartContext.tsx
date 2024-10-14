import { createContext } from "react";
import { type CartState } from "./cartReducer";
import { type CartProduct } from "../interface";

interface CartContext {
  state: CartState;
  addToCart: (item: CartProduct) => void;
  removeFromCart: (item: CartProduct) => void;
}

export const CartContext = createContext({} as CartContext);
