import ProductDetail from 'components/Organisms/ProductDetail/ProductDetail'
import { Product } from 'types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { productList } from 'services/listProduct'

interface ProductItemProps {
  productList: Product[],
  productDetail: Product
}

const ProductItem = ({ productList, productDetail } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ProductDetail productList={productList} productDetail={productDetail} />
    </>
  )
}

export default ProductItem

export const getStaticPaths = () => {
  const paths = productList.map(product => ({
    params: {
      slug: product?.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps : GetStaticProps<ProductItemProps> = async ({ params }) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return {
      notFound: true
    }
  }

  const product = productList.find(product => product?.slug === slug) as Product

  return {
    props: {
      productList,
      productDetail: product
    },
    revalidate: 10
  }
}