import ReactCreditCards from "react-credit-cards-2";
import { toast } from "sonner";
import { useState } from "react";

import styles from "./CreditCart.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useCartContext } from "../../../context/useCartContext";

export const CreditCart = () => {
  /* Esto debería ser un custom hook, esta no es la forma profesional
  de manejar formularios: */
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const { clearCart } = useCartContext();

  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: event.target.name,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* Verifica que alguno de los elementos tenga un string vacío,
    lo que significa que el campo está vacío y por lo tanto
    debe diligenciarlo el usuario antes de enviar
    el formulario: */
    if ([number, name, expiry, cvc].includes("")) {
      /* Mostrar mensaje de error */
      toast.error("All fields are required");
      return;
    }

    /* Si todos los campos no están vacíos se ejecuta este código: */
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });

    clearCart();
  };

  return (
    <div className={styles.container}>
      <div>
        <ReactCreditCards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          focused={cardData.focus as any}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number</label>
          <input
            type="number"
            name="number"
            id="number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={number}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={name}
          />
        </div>
        <div className={styles.formInputGrup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Card Expiry</label>
            <input
              type="number"
              name="expiry"
              id="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={expiry}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">Card CVC</label>
            <input
              type="number"
              name="cvc"
              id="cvc"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cvc}
            />
          </div>
        </div>
        <button className={styles.buyButton} type="submit">
          Buy now
        </button>
      </form>
    </div>
  );
};
