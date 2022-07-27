import { GridCars} from 'components/Organisms/GridCars/GridCars'
import GridCategories from 'components/Organisms/GridCategories/GridCategories'
import ProductGrid from 'components/Organisms/ProductGrid/ProductGrid'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Product } from 'types'
import motor from "public/assets/images/motor_i.png";
import inyector from "public/assets/images/inyector_i.png";
import empacadura from "public/assets/images/empacadura_i.png";
import bomba from "public/assets/images/bomba_i.png";
import amortiguador from "public/assets/images/amortiguador_i.png";
import bombaDeAguaAveo from "public/assets/images/bomba-de-agua-aveo.png";

interface HomeProps {
  productList: Product[]
}

const Home = ({ productList } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <GridCars />
      <GridCategories />
      <ProductGrid productList={productList} space_top />
    </>
  )
}

export default Home

export const getStaticProps : GetStaticProps<HomeProps> = async () => {
  const productList = [
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
    },
    {
      id: 6,
      price: 850,
      slug: 'motor-2009-2010-chev-aveo',
      title: 'Motor 7/8 2009 2010 Chev Aveo',
      image: motor,
      description: 'Motor 7/8 2009 2010 Chev Aveo 1.6l Usado Importado De Usa en venta en Maracaibo Zulia por sólo U$S 950.00'
    },
    {
      id: 7,
      price: 30,
      slug: 'inyector-chevrolet-aveo-lt-ls',
      title: 'Inyector Chevrolet Aveo LT LS',
      image: inyector,
      description: 'Inyector Chevrolet Aveo LT LS'
    },
    {
      id: 8,
      price: 5,
      slug: 'empacadura-camara-nissan-sentra-b13-b14',
      title: 'Empacadura Camara Nissan Sentra B13 B14',
      image: empacadura,
      description: 'Articulo EMPACADURA DE CAMARA Modelo SENTRA B13 B14'
    },
    {
      id: 9,
      price: 45,
      slug: 'bomba-de-aceite-chery-arauca-x1',
      title: 'Bomba De Aceite Chery Arauca X1',
      image: bomba,
      description: 'Bomba De Aceite Chery Arauca X1 Modelo ARAUCA X1'
    },
    {
      id: 10,
      price: 9,
      slug: 'base-de-amortiguador-delantera-chevrolet',
      title: 'Base de Amortiguador Delantera Chevrolet',
      image: amortiguador,
      description: 'Base de Amortiguador Delantera Chevrolet Optra'
    },
    {
      id: 11,
      price: 16,
      slug: 'bomba-de-agua-aveo',
      title: 'Bomba De Agua Aveo Nubira Lanos Motor 1.6 Original Gm',
      image: bombaDeAguaAveo,
      description: 'Bomba Agua Aveo 1.6 Lt Speed 05/2015 Todo Bomba De Agua Aveo Nubira Lanos Motor 1.6 Original Gm'
    }
  ]

  return {
    props: {
      productList
    }
  }
}