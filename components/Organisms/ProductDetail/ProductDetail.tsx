import React from "react";
import Image from "next/image";
import styles from "./ProductDetail.module.scss";
import ProductGrid from "components/Organisms/ProductGrid/ProductGrid";
import { Product } from "types";
import TitleLine from "components/Atoms/TitleLine/TitleLine";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { HiOutlineZoomIn, HiOutlineZoomOut, HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineFullscreenExit } from "react-icons/ai";

interface ProductDetailProps {
  productList: Product[]
  productDetail: Product
}

const ProductDetail = ({ productList, productDetail} : ProductDetailProps ) => {
  return (
    <>
      <article className={styles.product_detail_container}>
        <div className={`max-width ${styles.product_detail}`}>
          <div className={styles.product_image}>
            <TransformWrapper wheel={false}>
              {({ zoomIn, zoomOut, resetTransform} : any ) => (
                <>
                <TransformComponent>
                  <Image objectFit="contain" src={productDetail?.image} alt={productDetail?.title} width={500} height={500} title={productDetail?.title} />
                </TransformComponent>
                <div className={styles.product_image_controls}>
                  <HiOutlineZoomIn onClick={() => zoomIn()} />
                  <HiOutlineZoomOut onClick={() => zoomOut()} />
                  <AiOutlineFullscreenExit onClick={() => resetTransform()} />
                </div>
                </>
              )}
            </TransformWrapper>
          </div>
          <div className={styles.product_content}>
            <h1 className="font-22 bold mb-15 c-black">{ productDetail?.title }</h1>
            <p className="font-36 light mt-0 mb-15">U$S { productDetail?.price }</p>
            <p className="font-18 light mt-0 mb-5">Bs.56,60</p>
            <p>{ productDetail?.description }</p>
            <button className="button primary block"><span className="font-16 light pr-5">Comprar</span> <HiOutlineShoppingCart /></button>
          </div>
        </div>
        <div className="max-width">
          <TitleLine customClass="font-36 c-black bebas mt-55 mb-0" title="Productos relacionados" />
        </div>
        <ProductGrid productList={productList} />
      </article>
    </>
  );
};

export default ProductDetail;
