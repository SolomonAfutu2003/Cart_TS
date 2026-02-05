import type { CartUIProps } from "../../utils/Types";
import Button from "../Button";
import removeIcon from "/images/icon-remove-item.svg";
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
      <Button onClick={onClick} icon={removeIcon} style={"w-5 h-5 border border-addToCart hover:border-hover hover-filter-red hover:bg-white flex justify-center items-center"} />
    </div>
  );
};

export default CartUI;
