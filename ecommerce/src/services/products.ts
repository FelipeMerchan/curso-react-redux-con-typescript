import { Product, ProductResponse } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json() as ProductResponse[];

    return data.map((product) => {
      const MapProduct: Product = {
        character: product.character ?? '',
        gameSeries: product.gameSeries ?? '',
        image: product.image ?? '',
        name: product.name ?? '',
        price: product.price ?? 0,
      }

      return MapProduct;
    })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Failed to get products')
  }
}