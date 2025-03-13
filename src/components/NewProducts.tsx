import React from "react";
import ProductCard from "./ProductCard";
import all_product from '../../public/img/all_product.js' ;
import { AuroraText } from "./magicui/aurora-text";




const NewProducts = () => {
  return (
    <div>
      <div className="container px-4 pt-16">
        <h2 className="flex text-2xl pb-6 font-bold justify-center">
          <AuroraText>  New Products</AuroraText>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {all_product.map((value, index) => (
            <ProductCard key={index} product={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
