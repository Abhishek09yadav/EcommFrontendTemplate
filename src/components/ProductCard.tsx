import Image, { StaticImageData } from 'next/image';
import React from 'react'
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
  return (
    <div className="flex flex-col items-center border-accent border-2 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%] lg:[22%] transition-transform hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        className="h-48 object-contain rounded-md w-full "
      />
      <h3 className="text-lg font-semibold mt-3 text-center text-avocado-600">{product.name}</h3>
      <h3 className="from-neutral-500 text-sm">Category: {product.category}</h3>
      <div className="flex justify-between w-full mt-2">
        <span>{product.new_price}</span>
        <span>{product.old_price}</span>
      </div>
    </div>
  );
};

export default ProductCard