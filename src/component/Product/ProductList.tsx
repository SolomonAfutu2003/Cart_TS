import ProductCard from "./ProductCard";
import cartData from "../../Data/data.json";
import icon from "/images/icon-add-to-cart.svg";
import addIcon from "/images/icon-increment-quantity.svg";
import removeIcon from "/images/icon-decrement-quantity.svg";
import Button from "../Button";
import { useCartContext } from "../../utils/hooks";
import ProductLayout from "./ProductLayout";

const ProductList = () => {
  const {
    handleAddToCart,
    handleDecreaseProduct,
    getQuantity,
    isProductInCart,
  } = useCartContext();

  return (
    <div>
      <ProductLayout>
        {cartData.map((data) => {
          const quantity = getQuantity(data.name);
          const productData = {
            ...data,
            image:
              data.image.desktop || data.image.mobile || data.image.thumbnail,
            quantity, // Add quantity to product data
          };

          return (
            <div className="relative" key={data.name}>
              <ProductCard product={productData} />
              {isProductInCart(data.name) ? (
                <div className="bg-hover absolute inset-x-9 bottom-19 px-5 py-2 rounded-full flex justify-between items-center w-50 ">
                  <Button
                    icon={addIcon}
                    onClick={() => handleAddToCart(data)}
                    style={
                      "border-2 w-7 h-7 p-2 border-addToCart hover:border-hover hover-filter-brown hover:bg-white flex justify-center items-center"
                    }
                  />
                  <span className="text-white">{quantity}</span>
                  <Button
                    icon={removeIcon}
                    onClick={() => handleDecreaseProduct(data)}
                    style={
                      "border-2 w-7 h-7 p-2 border-addToCart hover:border-hover hover-filter-brown hover:bg-white flex justify-center items-center"
                    }
                  />
                </div>
              ) : (
                <Button
                  text="Add to Cart"
                  onClick={() => handleAddToCart(data)}
                  icon={icon}
                  style={
                    "border-2 w-50 bg-white absolute inset-x-9 bottom-19 font-bold px-5 py-2 border-addToCart hover:border-hover hover:text-hover flex gap-2 justify-center items-center "
                  }
                />
              )}
            </div>
          );
        })}
      </ProductLayout>
    </div>
  );
};

export default ProductList;
