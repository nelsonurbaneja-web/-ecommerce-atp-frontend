import ImageZoomWrapper from "components/Molecules/ImageZoomWrapper/ImageZoomWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Product } from 'types';
import Image from 'next/image';

interface SwiperPrincipalDetailProductProps {
  productDetail: Product
  thumbsSwiper: any
}

const SwiperPrincipalDetailProduct = ({ productDetail, thumbsSwiper} : SwiperPrincipalDetailProductProps) => {
  return (
    <Swiper
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "#48b5e4",
        "--swiper-pagination-color": "#48b5e4",
      }}
      navigation={true}
      simulateTouch={false}
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      {
        productDetail?.image?.map((image: string) => (
          <SwiperSlide key={image} >
            <ImageZoomWrapper>
              <Image objectFit="contain" src={image} alt={productDetail?.title} width={500} height={500} title={productDetail?.title} />
            </ImageZoomWrapper>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperPrincipalDetailProduct