/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateProductRequest, type Product, type ProductResponse } from "../interface";

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

  } catch (error) {
    throw new Error('Network error')
  }
}

export const createProduct = async (product: CreateProductRequest): Promise<ProductResponse> => {
  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to create product');
    }
  } catch (error) {
    throw new Error('Network error')
  }
}