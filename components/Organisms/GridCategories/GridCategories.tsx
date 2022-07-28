import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Scrollbar } from "swiper"
import styles from './GridCategories.module.scss'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/scrollbar";

const listCategory = [
  {
    id: 1,
    title: 'Todas',
    slug: 'todas',
  },
  {
    id: 2,
    title: 'Encendido',
    slug: 'encendido',
  },
  {
    id: 3,
    title: 'Suspensión y Dirección',
    slug: 'suspension-y-direccion',
  },
  {
    id: 4,
    title: 'Adictivos y Aceites',
    slug: 'adictivos-y-aceites',
  },
  {
    id: 5,
    title: 'Motor',
    slug: 'motor',
  }
]

const GridCategories = () => {
  return (
    <div className={styles.grid_categories}>
      <nav className="max-width">
        <ul className={styles.grid_categories_list}>
          <Swiper 
            spaceBetween={10} 
            modules={[Pagination, Scrollbar]}
            scrollbar={{
              hide: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1050: {
                slidesPerView: 5,
                spaceBetween: 15,
              }
          }}> 
            {listCategory.map(category => 
             <SwiperSlide key={category.id}>  
                <li className={`font-16 lato ${styles.grid_categories_item} `}>
                  {category.title}
                </li>
              </SwiperSlide>
            )}
           </Swiper>
        </ul>
      </nav>
    </div>
  )
}

export default GridCategories