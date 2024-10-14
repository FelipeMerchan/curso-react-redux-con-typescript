import { useNavigate } from "react-router-dom";

import styles from "./CartModal.module.css";
import CloseIcon from "../../../assets/close.svg";
import { Table } from "../Table/Table";

type Props = {
  handleShowCartModal: () => void;
};

export const CartModal = ({ handleShowCartModal }: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
    handleShowCartModal();
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={CloseIcon} alt="Close" height="15" width="15" />
      </button>
      <Table />
      <button className={styles.modalCheckout} onClick={handleNavigate}>
        Checkout
      </button>
    </div>
  );
};
