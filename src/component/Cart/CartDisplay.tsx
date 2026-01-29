import React from "react";
import emptyIcon from "/images/illustration-empty-cart.svg";
import { useCartContext } from "../../utils/hooks";
import CartUI from "./CartUI";

const CartDisplay = () => {
  const {
    addedList,
    handleDelete,
    getTotalPrice,
    getTotalProduct,
    getTotalProductPrice,
  } = useCartContext();

  return (
    <div>
      <section className="w-90 h-auto bg-white rounded-lg p-5 shadow shadow-black/15 ">
        <h1>Your Cart {getTotalProduct()}</h1>
        {addedList.length === 0 ? (
          <div>
            <div className="flex justify-center items-center">
              <img src={emptyIcon} alt="" />
            </div>
            <p> your added products will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="h-60 overflow-y-auto custom-scrollbar-v4">
              {addedList.map((item) => (
                <CartUI
                  key={item.category}
                  category={item.category}
                  quantity={item.quantity}
                  price={item.price}
                  totalPrice={getTotalProductPrice(item.name)}
                  onClick={() => handleDelete(item.name)}
                />
              ))}
            </div>
           <p> Total Price {getTotalPrice()}</p>
          </div>
        )}
        {/* <button onClick={}>X</button> */}
        {/* {formatPrice(item.price * item.quantity)} */}
      </section>
    </div>
  );
};

export default CartDisplay;
