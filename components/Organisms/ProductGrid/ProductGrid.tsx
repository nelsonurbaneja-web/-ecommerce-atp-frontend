import TitleLine from 'components/Atoms/TitleLine/TitleLine'
import ProductCard from 'components/Molecules/ProductCard/ProductCard'
import React from 'react'
import { Product } from 'types'
import styles from './ProductGrid.module.scss'

interface ProductGridProps {
  productList: Product[],
  space_top?: boolean
  title: string
}

const ProductGrid = ({ productList, space_top, title }: ProductGridProps) => {
  return (
    <section className={`${styles.grid_product_container} ${space_top ? styles.space_top : ''}`}>
      <div className="max-width">
        <TitleLine
          customClass="font-36 c-black bebas mt-15 mb-0"
          title={title}
        />
      </div>
      <div className={`max-width ${styles.grid_product}`}>
        {productList?.map(product =>
          <ProductCard key={product.id} {...product} /> 
        )}
      </div>
    </section>
  )
}

export default ProductGrid