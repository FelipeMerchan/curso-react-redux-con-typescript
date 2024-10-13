import styles from "./CartModal.module.css";
import CloseIcon from "../../../assets/close.svg";

type Props = {
  handleShowCartModal: () => void;
};

export const CartModal = ({ handleShowCartModal }: Props): JSX.Element => {
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
          <tr>
            <td>Name</td>
            <td>
              <button className={styles.modalButtonRemove}>-1</button>
            </td>
            <td>12</td>
            <td>
              <button className={styles.modalButtonAdd}>+1</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Total: 400,00</strong>
      </p>
      <button className={styles.modalCheckout}>Checkout</button>
    </div>
  );
};
