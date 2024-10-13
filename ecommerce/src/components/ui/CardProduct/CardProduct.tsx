import { useCartContext } from "../../../context/useCartContext";
import { Product } from "../../../services/types";
import styles from "./CartProduct.module.css";

type Props = {
  product: Product;
};

export const CardProduct = ({ product }: Props): JSX.Element => {
  const { addToCart } = useCartContext();

  const item = {
    id: product.id,
    name: product.title,
    image: product.image,
    quantity: 1,
  };

  const handleClick = (item) => () => {
    addToCart(item);
  };

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
        <button className={styles.cardButton} onClick={handleClick(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
