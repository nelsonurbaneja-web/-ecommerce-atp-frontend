import ProductGrid from "components/Organisms/ProductGrid/ProductGrid";
import React from "react";
import { Product } from "types";

interface RelatedProductsProps {
  productList: Product[];
}

const RelatedProducts = ({ productList }: RelatedProductsProps) => {
  return (
    <div>
      <ProductGrid productList={productList.slice(0,5)} title="Productos relacionados" />
    </div>
  );
};

export default RelatedProducts;
