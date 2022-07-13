import ProductCard from 'components/Molecules/ProductCard/ProductCard'
import React from 'react'
import { Product } from 'types'
import styles from './ProductGrid.module.scss'


interface ProductGridProps {
  productList: Product[]
}

const ProductGrid = ({ productList }: ProductGridProps) => {
  return (
    <section className={`${styles.grid_product_container}`}>
      <div className={`max-width ${styles.grid_product}`}>
        {productList?.map(product =>
          <ProductCard key={product.id} {...product} /> 
        )}
      </div>
    </section>
  )
}

export default ProductGrid