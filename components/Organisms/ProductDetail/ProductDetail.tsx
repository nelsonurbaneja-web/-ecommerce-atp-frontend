import { useContext, useState } from "react";
import styles from "./ProductDetail.module.scss";
import { Product } from "types";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { addProductToCartToLocalStorage } from 'services/addProductToCartToLocalStorage'
import { CartContext } from "context/CartContext";
import { formatPrice } from "services/formatPrice";
import RelatedProducts from "components/Organisms/RelatedProducts/RelatedProducts";
import SwiperPrincipalDetailProduct from "components/Organisms/SwiperPrincipalDetailProduct/SwiperPrincipalDetailProduct";
import SwiperGridDetailProduct from "components/Organisms/SwiperGridDetailProduct/SwiperGridDetailProduct";

interface ProductDetailProps {
  productList: Product[]
  productDetail: Product
}

const ProductDetail = ({ productList, productDetail } : ProductDetailProps ) => {
  const {state, dispatch} = useContext(CartContext)
  const findProduct: boolean = state.cart.some(product => product.id === productDetail?.id)
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
            <SwiperGridDetailProduct productDetail={productDetail} setThumbsSwiper={setThumbsSwiper} />
            <SwiperPrincipalDetailProduct productDetail={productDetail} thumbsSwiper={thumbsSwiper} />
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
        <RelatedProducts productList={productList} />
      </article>
    </>
  );
};

export default ProductDetail;
