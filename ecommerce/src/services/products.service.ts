import { type Product, type ProductResponse } from "../interface";

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(`http://localhost:3000/products?_page=${page}&_limit=10`);

    if (response.ok) {
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
    } else {
      throw new Error('Failed to get products')
    }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Network error')
  }
}