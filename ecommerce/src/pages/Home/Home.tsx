import { useQuery } from "react-query";
import { CardProduct } from "../../components/ui/CardProduct";
import { Hero } from "../../components/ui/Hero";
/* import { useProducts } from "../../hooks/useProducts"; */
import styles from "./Home.module.css";
import { Toaster } from "sonner";
import { getProducts } from "../../services";
import { useState } from "react";

export const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
  });
  /* const { products, isLoading, error } = useProducts(); */
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationButton}
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous page
        </button>
        <div>
          <span className={styles.paginationActive}>{page}</span>
        </div>
        <button className={styles.paginationButton} onClick={handleNextPage}>
          Next page
        </button>
      </div>
    </>
  );
};
