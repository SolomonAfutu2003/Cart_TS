import React from "react";
import type { CartUIProps } from "../../utils/Types";
import Button from "../Button";
import { formatPrice } from "../../utils/priceFormatter";

const CartUI = ({
  category,
  quantity,
  price,
  onClick,
  totalPrice,
}: CartUIProps) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-addToCart">
      <section>
        <h4>{category}</h4>
        <span className="mr-3">{quantity}X</span>
        <span>@{formatPrice(price)}</span>
        <span className="ml-3">{formatPrice(totalPrice)}</span>
      </section>
      <Button onClick={onClick} text={"X"} style={"text-red-500"} />
    </div>
  );
};

export default CartUI;
