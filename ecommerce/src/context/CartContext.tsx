import { createContext } from "react";
import { type CartState } from "./cartReducer";
import { type CartProduct } from "../interface";

interface CartContext {
  state: CartState;
  addToCart: (item: CartProduct) => void;
}

export const CartContext = createContext<CartContext | null>(null);
