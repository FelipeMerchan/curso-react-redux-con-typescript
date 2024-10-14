import { useCartContext } from "../../../context/useCartContext";
import { type CartProduct, type Product } from "../../../interface";
import styles from "./CartProduct.module.css";

type Props = {
  product: Product;
};

export const CardProduct = ({ product }: Props): JSX.Element => {
  const { addToCart } = useCartContext();

  const item: CartProduct = {
    id: product.id,
    image: product.image,
    price: product.price,
    quantity: 1,
    title: product.title,
  };

  const createHandleClick = (item: CartProduct) => () => {
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
        <button className={styles.cardButton} onClick={createHandleClick(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
