import ProductCard from 'components/Molecules/ProductCard/ProductCard'
import React from 'react'
import { Product } from 'types'
import styles from './ProductGrid.module.scss'

interface ProductGridProps {
  productList: Product[],
  space_top?: boolean
}

const ProductGrid = ({ productList, space_top }: ProductGridProps) => {
  return (
    <section className={`${styles.grid_product_container} ${space_top ? styles.space_top : ''}`}>
      <div className={`max-width ${styles.grid_product}`}>
        {productList?.map(product =>
          <ProductCard key={product.id} {...product} /> 
        )}
      </div>
    </section>
  )
}

export default ProductGrid