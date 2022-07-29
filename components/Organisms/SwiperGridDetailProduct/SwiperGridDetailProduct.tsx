import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Product } from 'types';
import Image from 'next/image';
import styles from './SwiperGridDetailProduct.module.scss'

interface SwiperGridDetailProductProps {
  productDetail: Product
  setThumbsSwiper: React.Dispatch<any>
}

const SwiperGridDetailProduct = ({ productDetail, setThumbsSwiper} : SwiperGridDetailProductProps) => {
  return (
    <Swiper onSwiper={setThumbsSwiper} spaceBetween={5} slidesPerView={5} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}
      className={styles.swiper_grid}
    >
      {
        productDetail.image?.map((product : string) => (
          <SwiperSlide key={product} className={`${styles.swiper_grid_item}`}>
            <Image objectFit="contain" src={product} alt={productDetail?.title} width={100} height={100} title={productDetail?.title} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperGridDetailProduct