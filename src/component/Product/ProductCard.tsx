import type { ProductCardProps } from "../../utils/Types";
import { formatPrice } from "../../utils/priceFormatter";
import { useCartContext } from "../../utils/hooks";

const ProductCard = ({ product }: ProductCardProps) => {
  const { isProductInCart } = useCartContext();
  return (
    <div className="flex flex-col justify-center space-y-5 ">
      <section className="w-full h-full">
        <img
          src={product.image}
          alt="product image"
          className={`w-full h-full rounded-lg ${isProductInCart(product.name) ? "border-2 border-hover" : ""}`}
        />
      </section>
      <section>
        <p className="text-category">{product.category}</p>
        <h4 className="text-product font-bold text-lg">{product.name}</h4>
        <span className="font-bold text-hover">
          {formatPrice(product.price)}
        </span>
      </section>
    </div>
  );
};

export default ProductCard;
