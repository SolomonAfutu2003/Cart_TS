import ProductCard from "./ProductCard";
import cartData from "../../Data/data.json";
import icon from "/images/icon-add-to-cart.svg";
import Button from "../Button";
import { useCartContext } from "../../utils/hooks";

const ProductList = () => {
  const {
    handleAddToCart,
    handleDecreaseProduct,
    getQuantity,
    isProductInCart,
  } = useCartContext();

  return (
    <div className="w-[70%] grid grid-cols-3 gap-3">
      {cartData.map((data) => {
        const quantity = getQuantity(data.name);
        

        return (
          <div key={data.name}>
            <ProductCard
              image={data.image.desktop}
              name={data.name}
              category={data.category}
              price={data.price}
            />
            {isProductInCart(data.name) ? (
              <div className="bg-hover px-5 py-2 rounded-full flex justify-between items-center w-50 ">
                <Button
                  text="+"
                  onClick={() => handleAddToCart(data)}
                  style={
                    "border-2 w-5 h-5 p-3 font-bold  ease-in-out border-addToCart text-addToCart hover:border-addToCart hover:bg-white hover:text-hover flex justify-center items-center"
                  }
                />
                <span className="text-white">{quantity}</span>
                <Button
                  text="-"
                  onClick={() => handleDecreaseProduct(data)}
                  style={
                    "border-2 w-5 h-5 p-3 font-bold border-addToCart text-addToCart hover:border-addToCart hover:bg-white hover:text-hover flex justify-center items-center"
                  }
                />
              </div>
            ) : (
              <Button
                text="Add to Cart"
                onClick={() => handleAddToCart(data)}
                icon={icon}
                style={
                  "border-2 w-50 font-bold px-5 py-2 border-addToCart hover:border-hover hover:text-hover flex gap-2 justify-center items-center"
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
