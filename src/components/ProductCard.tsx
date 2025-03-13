"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface ProductProps {
  product: {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    rating: number;
    new_price: number;
    old_price: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const RenderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars); // or i can do rating % 1 !== 0
    const emptystars = 5 - fullStars - halfStars;
    return (
      <div className="flex items-center text-yellow-300 flex-row flex-nowrap ">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <FaStarHalfAlt key={i} />
        ))}
        {[...Array(emptystars)].map((_, i) => (
          <CiStar key={i} />
        ))}
      </div>
    );
  };
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] lg:[22%] transition-transform hover:scale-105 drop-shadow-md "
    >
      <Image
        src={product.image}
        alt={product.name}
        className="h-48 object-contain rounded-xl 
 w-full "
        style={{ mixBlendMode: "color-burn" }}
      />
      <h3 className="text-lg font-semibold mt-3 text-center text-avocado-600">
        {product.name}
      </h3>
      <h3 className="from-neutral-500 text-sm">Category: {product.category}</h3>
      <div className="flex text-2xl mt-4 flex-row gap-1">
        {RenderRatingStars(product.rating)}
      </div>
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
        <InteractiveHoverButton>Shop Now</InteractiveHoverButton>
        {/* 
        <Button className="border-purple-200 text-purple-600 bg-transparent hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ">
          Shop Now
        </Button> */}
      </div>
    </div>
  );
};

export default ProductCard;
