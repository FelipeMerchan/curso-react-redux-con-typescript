import { Product } from "../../../services/types";
import styles from "./CartProduct.module.css";

type Props = {
  product: Product;
};

export const CardProduct = ({ product }: Props): JSX.Element => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.cardDetail}>
        <p className={styles.cardTitle}>{product.title}</p>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.type}</p>
          <p className={styles.cardPrice}>
            Price, <small>00</small>
          </p>
        </div>
        <button className={styles.cardButton}>Add to cart</button>
      </div>
    </div>
  );
};
