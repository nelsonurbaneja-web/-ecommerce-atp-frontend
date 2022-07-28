import TitleLine from "components/Atoms/TitleLine/TitleLine";
import ProductGrid from "components/Organisms/ProductGrid/ProductGrid";
import React from "react";
import { Product } from "types";

interface RelatedProductsProps {
  productList: Product[];
}

const RelatedProducts = ({ productList }: RelatedProductsProps) => {
  return (
    <div>
      <div className="max-width">
        <TitleLine
          customClass="font-36 c-black bebas mt-55 mb-0"
          title="Productos relacionados"
        />
      </div>
      <ProductGrid productList={productList.slice(0,5)} />
    </div>
  );
};

export default RelatedProducts;
