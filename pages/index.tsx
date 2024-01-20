import { GridCars} from 'components/Organisms/GridCars/GridCars'
import GridCategories from 'components/Organisms/GridCategories/GridCategories'
import ProductGrid from 'components/Organisms/ProductGrid/ProductGrid'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Product } from 'types'

interface HomeProps {
  productList: Product[]
}

const Home = ({ productList } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <GridCars />
      <GridCategories />
      <ProductGrid productList={productList ?? []} space_top title="Productos destacados" />
    </>
  )
}

export default Home

export const getStaticProps : GetStaticProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=deep`)
  const { data } = await response.json()

  if(response.status !== 200) {
    return {
      notFound: true
    }
  }

  const productList: Product[] = data.map((product: any) => {
    return {
      id: product.id,
      price: product.attributes.price,
      title: product.attributes.title,
      slug: product.attributes.slug,
      image: product.attributes.productImages.data.map((image: any) => image.attributes.url),
      description: product.attributes.description
    }
  })

  return {
    props: {
      productList
    }
  }
}