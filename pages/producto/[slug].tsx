import ProductDetail from 'components/Organisms/ProductDetail/ProductDetail'
import { Product } from 'types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

interface ProductItemProps {
  productList: Product[],
  productDetail: Product,
}

const ProductItem = ({ productList, productDetail } : InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <ProductDetail productList={productList} productDetail={productDetail} />
    </>
  )
}

export default ProductItem

export const getStaticPaths = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=deep`)
  const { data } = await response.json()

  const productList = data.map((product: any) => {
    return {
      id: product.id,
      price: product.attributes.price,
      title: product.attributes.title,
      slug: product.attributes.slug,
      image: product.attributes.productImages.data.map((image: any) => image.attributes.url),
      description: product.attributes.description
    }
  })
  
  const paths = productList.map((product : Product) => ({
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=deep`)
  const { data } = await response.json()

  const productList = data.map((product: any) => {
    return {
      id: product.id,
      price: product.attributes.price,
      title: product.attributes.title,
      slug: product.attributes.slug,
      image: product.attributes.productImages.data.map((image: any) => image.attributes.url),
      description: product.attributes.description
    }
  })

  if(response.status !== 200) {
    return {
      notFound: true
    }
  }
  
  if (typeof slug !== 'string') {
    return {
      notFound: true
    }
  }

  const product = productList.find((product: Product) => product?.slug === slug) as Product

  return {
    props: {
      productList,
      productDetail: product,
    },
    revalidate: 10
  }
}