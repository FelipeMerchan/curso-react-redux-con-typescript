import { CardProduct } from "../../components/ui/CardProduct";
import { Hero } from "../../components/ui/Hero";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Home.module.css";

export const Home = () => {
  const { products, isLoading, error } = useProducts();
  console.log({
    products,
    isLoading,
    error,
  });
  return (
    <>
      <Hero />
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
