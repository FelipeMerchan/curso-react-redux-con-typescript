import { useState } from "react";

import Logo from "../../../assets/logo.svg";
import CartIcon from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";
import { CartModal } from "../CartModal";
import { useCartContext } from "../../../context/useCartContext";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    state: { cartItems },
  } = useCartContext();

  const handleShowCartModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={Logo} alt="Logo de Ecommerce" width="50" height="50" />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      <div className={styles.navbarCartContainer}>
        {cartItems.length > 0 && (
          <p className={styles.navbarTextAmount}>{cartItems.length}</p>
        )}
        <button className={styles.navbarButton} onClick={handleShowCartModal}>
          <img
            src={CartIcon}
            alt="Ícono de un carrito de compras"
            height="20"
            width="20"
          />
        </button>
      </div>
      {showModal && <CartModal handleShowCartModal={handleShowCartModal} />}
    </div>
  );
};
