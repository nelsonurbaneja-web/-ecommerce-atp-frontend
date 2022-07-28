import TitleLine from 'components/Atoms/TitleLine/TitleLine'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper"
import styles from './GridCars.module.scss'
import chery from 'public/assets/images/chery.jpg'
import chevrolet from 'public/assets/images/chevrolet.jpg'
import fiat from 'public/assets/images/fiat.jpg'
import ford from 'public/assets/images/ford.jpg'
import hyundai from 'public/assets/images/hyundai.jpg'
import jeep from 'public/assets/images/jeep.jpg'
import kia from 'public/assets/images/kia.jpg'
import mazda from 'public/assets/images/mazda.jpg'
import mitsubishi from 'public/assets/images/mitsubishi.jpg'
import peugeot from 'public/assets/images/peugeot.jpg'
import renault from 'public/assets/images/renault.jpg'
import toyota from 'public/assets/images/toyota.jpg'
import volkswagen from 'public/assets/images/volkswagen.jpg'
import 'swiper/css'
import "swiper/css/pagination"

const listMarcas = [
  {
    id: 1,
    image: chery,
    title: 'Chery'
  },
  {
    id: 2,
    image: chevrolet,
    title: 'Chevrolet'
  },
  {
    id: 3,
    image: fiat,
    title: 'Fiat'
  },
  {
    id: 4,
    image: ford,
    title: 'Ford'
  },
  {
    id: 5,
    image: hyundai,
    title: 'Hyundai'
  },
  {
    id: 6,
    image: jeep,
    title: 'Jeep'
  },
  {
    id: 7,
    image: kia,
    title: 'Kia'
  }
  ,
  {
    id: 8,
    image: mazda,
    title: 'Mazda'
  },
  {
    id: 9,
    image: mitsubishi,
    title: 'Mitsubishi'
  },
  {
    id: 10,
    image: peugeot,
    title: 'Peugeot'
  },
  {
    id: 11,
    image: renault,
    title: 'Renault'
  },
  {
    id: 12,
    image: toyota,
    title: 'Toyota'
  },
  {
    id: 13,
    image: volkswagen,
    title: 'Volkswagen'
  }
]

export const GridCars = () => {
  return (
    <section className={`${styles.grid_images_container}`}>
      <div className="max-width">
        <TitleLine customClass="font-36 c-black bebas mb-25" title="Encuentra lo que necesitas" />
        <div className={styles.grid_images}>
          <Swiper 
            spaceBetween={10} 
            autoplay={{delay: 2500, disableOnInteraction: false,}}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              450: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1050: {
                slidesPerView: 7,
                spaceBetween: 15,
              },
              1250: {
                slidesPerView: 8,
                spaceBetween: 15,
              }
          }}> 
            {listMarcas.map(item => (
              <SwiperSlide key={item.id}>  
                <Image placeholder="blur" src={item.image} alt={item.title} width={150} height={150} objectFit="contain"/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
