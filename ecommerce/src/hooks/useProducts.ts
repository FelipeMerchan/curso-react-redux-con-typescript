import { useEffect, useState } from "react"
import { getProducts } from "../services"
import { type Product } from "../interface"

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProductList = () => {
    setIsLoading(true)
    setError(null)
    getProducts().then((products) => {
      setProducts(products)
    }).catch((error) => {
      setError(error.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getProductList()
  }, [])

  return {
    error,
    isLoading,
    products,
    getProductList,
  }
}