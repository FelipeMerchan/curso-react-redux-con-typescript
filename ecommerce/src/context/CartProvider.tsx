import {
  type PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { cartReducer, initialState } from "./cartReducer";
import { CartContext, type CartContextProps } from "./CartContext";
import { type CartProduct } from "../interface";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback((item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }, []);

  const removeFromCart = useCallback((item: CartProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);

  const value = useMemo<CartContextProps>(() => {
    return {
      state,
      addToCart,
      removeFromCart,
      clearCart,
    };
  }, [state, addToCart, removeFromCart, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
