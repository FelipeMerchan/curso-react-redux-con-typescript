import { CardProduct } from "../../components/ui/CardProduct";
import { Hero } from "../../components/ui/Hero";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Home.module.css";
import { Toaster } from "sonner";

export const Home = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
