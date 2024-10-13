import { Hero } from "../../components/ui/Hero/Hero";
import { useProducts } from "../../hooks/useProducts";

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
    </>
  );
};
