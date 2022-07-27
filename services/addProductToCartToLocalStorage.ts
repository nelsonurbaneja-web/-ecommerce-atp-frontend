import { Product } from "types";

export const addProductToCartToLocalStorage = (product: Product) => {
  let products: Product[] = window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products') as string) : [];
  const duplicates: boolean = products.some((p : Product ) => p.id === product.id);
  
  if(duplicates) return 

  const newProduct = {...product}
  products = [...products, newProduct]
  window.localStorage.setItem('products', JSON.stringify(products));
}

export const updateLocalStorage = (products: Product[] | []) => {
  window.localStorage.setItem('products', JSON.stringify(products));
}