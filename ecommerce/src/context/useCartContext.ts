import { useContext } from "react"
import { CartContext } from "./CartContext"

export const useCartContext = () => {
  const cart = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return cart
}