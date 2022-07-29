import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatPrice } from 'services/formatPrice'
import { Product } from 'types'
import styles from './ProductCard.module.scss'

const ProductCard = ({ price, title, image, description, slug } : Product ) => {

  return (
    <Link href={`/producto/${slug}`}>
      <article className={styles.product_container} >
        <Image objectFit="contain" src={image[0]} alt={title} width={500} height={500} title={title} />
        <div className={styles.product_content}>
          <p className="font-22 mt-0 mb-10 lato c-black">{ formatPrice(price) }</p>
          <h4 className="font-16 mt-5 mb-10 c-black c-bold text-ellipsis-2">{ title }</h4>
          <p className="font-14 mxy-0 light text-ellipsis-3" title={description}>{ description }</p>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard