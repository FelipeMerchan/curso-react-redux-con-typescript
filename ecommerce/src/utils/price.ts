import { type CartProduct } from "../interface";

export const totalPay = (cartItems: CartProduct[]) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return total;
};