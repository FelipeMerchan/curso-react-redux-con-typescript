import {
  type PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { cartReducer, initialState } from "./cartReducer";
import { CartContext } from "./CartContext";
import { type CartProduct } from "../interface";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback((item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }, []);

  const value = useMemo(() => {
    return {
      state,
      addToCart,
    };
  }, [state, addToCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
