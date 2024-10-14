import styles from "./CartModal.module.css";
import CloseIcon from "../../../assets/close.svg";
import { useCartContext } from "../../../context/useCartContext";
import { type CartProduct } from "../../../interface";

type Props = {
  handleShowCartModal: () => void;
};

export const CartModal = ({ handleShowCartModal }: Props): JSX.Element => {
  const {
    addToCart,
    state: { cartItems },
    removeFromCart,
  } = useCartContext();

  const createRemoveFromCart = (item: CartProduct) => () => {
    removeFromCart(item);
  };

  const createAddToCart = (item: CartProduct) => () => {
    addToCart(item);
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={CloseIcon} alt="Close" height="15" width="15" />
      </button>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <p>{item.title}</p>
              </td>
              <td>
                <button
                  className={styles.modalButtonRemove}
                  onClick={createRemoveFromCart(item)}
                >
                  -1
                </button>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>
                <button
                  className={styles.modalButtonAdd}
                  onClick={createAddToCart(item)}
                >
                  +1
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>Total: 400,00</strong>
      </p>
      <button className={styles.modalCheckout}>Checkout</button>
    </div>
  );
};
