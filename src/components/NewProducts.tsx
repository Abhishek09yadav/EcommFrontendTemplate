"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import all_product from '../../public/img/all_product.js' ;
import { AuroraText } from "./magicui/aurora-text";
import { Particles } from "./magicui/particles";




const NewProducts = () => {
    const [color, setColor] = useState("#019031");
  return (
    <div>
      <div className="container px-4 pt-16 relative">
        <h2 className="flex text-2xl pb-6 font-bold justify-center">
          <AuroraText className="font-bold text-5xl"> New Products</AuroraText>
        </h2>
        <Particles
          className="absolute inset-0 z-[-1] bg-red"
          quantity={1000}
          ease={80}
          color={color}
          refresh
        />
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
