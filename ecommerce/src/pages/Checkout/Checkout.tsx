import { Toaster } from "sonner";
import { CreditCart } from "../../components/ui/CreditCart";
import { Table } from "../../components/ui/Table/Table";

import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1} />
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>
          <CreditCart />
        </div>
      </div>
    </div>
  );
};
