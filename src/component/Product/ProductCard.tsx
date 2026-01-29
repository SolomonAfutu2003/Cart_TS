import React from "react";
import type { ProductCardProps } from "../../utils/Types";
import { formatPrice } from "../../utils/priceFormatter";

const ProductCard = ({ image, name, price, category}: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-3">
      <section className="w-50 h-50 ">
        <img src={image} alt="" className="w-full h-full rounded-lg" />
      </section>
      <section>
        <p className="text-category">{category}</p>
        <h4 className="text-product font-bold text-lg">{name}</h4>
        <span className="font-bold text-hover">{formatPrice(price)}</span>
      </section>
    </div>
  );
};

export default ProductCard;
