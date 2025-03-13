"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProductProps {
  product: {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    new_price: number;
    old_price: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,

    });
  })

  return (
    <div
      data-aos="fade-up"
       className="flex flex-col items-center   rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] lg:[22%] transition-transform hover:scale-105 drop-shadow-md "
    >
      <Image
        src={product.image}
        alt={product.name}
        className="h-48 object-contain rounded-xl
 w-full "
      />
      <h3 className="text-lg font-semibold mt-3 text-center text-avocado-600">
        {product.name}
      </h3>
      <h3 className="from-neutral-500 text-sm">Category: {product.category}</h3>
      <div className="flex flex-row items-center justify-around  w-full m-3">
        <div className="flex flex-col  gap-2 mt-3">
          {" "}
          <div className=" text-xs text-neutral-400">
            Original Price:{" "}
            <span className="line-through text-xs">{product.old_price}</span>
          </div>
          <div>
            New Price:{" "}
            <span className=" text-green-500 font-bold">
              {product.new_price}
            </span>
          </div>
        </div>

        <Button>Shop Now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
