import { useCartContext } from "../../../context/useCartContext";
import { type CartProduct } from "../../../interface";
import { totalPay } from "../../../utils/price";
import styles from "./Table.module.css";

export const Table = () => {
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
    <div className={styles.tableContainer}>
      <table className={styles.table}>
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
        <strong>Total: ${totalPay(cartItems)}</strong>
      </p>
    </div>
  );
};
