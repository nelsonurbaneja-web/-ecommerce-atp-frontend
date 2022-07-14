import ProductDetail from 'components/Organisms/ProductDetail/ProductDetail'
import motor from 'public/assets/motor.png'
import inyector from 'public/assets/inyector-chevrolet-aveo-lt-ls.jpg'
import empacadura from 'public/assets/empacadura-camara-nissan-sentra-b13-b14.jpg'
import bomba from 'public/assets/bomba-de-aceite-chery-arauca-x1.jpg'
import amortiguador from 'public/assets/base-amortiguador-delantera-optra.jpg'
import { Product } from 'types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

interface ProductItemProps {
  productList: Product[],
  productDetail: Product
}

const productList : Product[] = [
  {
    id: 1,
    price: 850,
    slug: 'motor-2009-2010-chev-aveo',
    title: 'Motor 7/8 2009 2010 Chev Aveo',
    image: motor,
    description: 'Motor 7/8 2009 2010 Chev Aveo 1.6l Usado Importado De Usa en venta en Maracaibo Zulia por sólo U$S 950.00'
  },
  {
    id: 2,
    price: 30,
    slug: 'inyector-chevrolet-aveo-lt-ls',
    title: 'Inyector Chevrolet Aveo LT LS',
    image: inyector,
    description: 'Inyector Chevrolet Aveo LT LS'
  },
  {
    id: 3,
    price: 5,
    slug: 'empacadura-camara-nissan-sentra-b13-b14',
    title: 'Empacadura Camara Nissan Sentra B13 B14',
    image: empacadura,
    description: 'Articulo EMPACADURA DE CAMARA Modelo SENTRA B13 B14'
  },
  {
    id: 4,
    price: 45,
    slug: 'bomba-de-aceite-chery-arauca-x1',
    title: 'Bomba De Aceite Chery Arauca X1',
    image: bomba,
    description: 'Bomba De Aceite Chery Arauca X1 Modelo ARAUCA X1'
  },
  {
    id: 5,
    price: 9,
    slug: 'base-de-amortiguador-delantera-chevrolet',
    title: 'Base de Amortiguador Delantera Chevrolet',
    image: amortiguador,
    description: 'Base de Amortiguador Delantera Chevrolet Optra'
  }
]

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
    }
  }
}