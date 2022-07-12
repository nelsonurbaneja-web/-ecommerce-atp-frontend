import { GridCars} from 'components/Organisms/GridCars/GridCars'
import Header from 'components/Organisms/Header/Header'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <GridCars />
    </div>
  )
}

export default Home
