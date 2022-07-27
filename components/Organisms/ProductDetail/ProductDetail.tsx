import React, { useContext } from "react";
import Image from "next/image";
import styles from "./ProductDetail.module.scss";
import ProductGrid from "components/Organisms/ProductGrid/ProductGrid";
import { Product } from "types";
import TitleLine from "components/Atoms/TitleLine/TitleLine";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { HiOutlineZoomIn, HiOutlineZoomOut, HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { addProductToCartToLocalStorage } from 'services/addProductToCartToLocalStorage'
import { CartContext } from "context/CartContext";
import { formatPrice } from "services/formatPrice";

interface ProductDetailProps {
  productList: Product[]
  productDetail: Product
}

const ProductDetail = ({ productList, productDetail } : ProductDetailProps ) => {
  const {state, dispatch} = useContext(CartContext)
  const findProduct: boolean = state.cart.some(product => product.id === productDetail?.id)

  const addProduct = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: productDetail
    })
    addProductToCartToLocalStorage(productDetail)
  }

  return (
    <>
      <article className={styles.product_detail_container}>
        <div className={`max-width ${styles.product_detail}`}>
          <div className={styles.product_image}>
            <TransformWrapper>
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
            <p className="font-36 light mt-0 mb-15">{ formatPrice(productDetail?.price) }</p>
            <p className="font-18 light mt-0 mb-5">Bs.56,60</p>
            <p>{ productDetail?.description }</p>
            {
              findProduct ? (
                <button className="button primary block" disabled>Agregado</button>
              ) : (
                <button className="button primary block" onClick={() => addProduct()}><span className="font-16 light pr-5" >Comprar</span> <HiOutlineShoppingCart /></button>
              )
            }
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
