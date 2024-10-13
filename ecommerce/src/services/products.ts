import { Product, ProductResponse } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json() as ProductResponse[];

    return data.map((product) => {
      const MapProduct: Product = {
        id: product.id,
        image: product.image ?? '',
        price: product.price ?? 0,
        title: product.name ?? '',
        type: product.type ?? '',
      }

      return MapProduct;
    })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Failed to get products')
  }
}