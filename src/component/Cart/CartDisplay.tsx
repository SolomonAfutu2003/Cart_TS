import emptyIcon from "/images/illustration-empty-cart.svg";
import carbonIcon from "/images/icon-carbon-neutral.svg";
import { useCartContext } from "../../utils/hooks";
import CartUI from "./CartUI";
import Button from "../Button";
import { useState } from "react";
import ConfirmUI from "./ConfirmUI";

const CartDisplay = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = () => {
    setIsConfirm(prev => !prev);
  };

  const {
    addedList,
    handleDelete,
    getTotalPrice,
    getTotalProduct,
    getTotalProductPrice,
  } = useCartContext();

  return (
    <div>
      <section className="bg-white rounded-lg p-5 shadow shadow-black/15 ">
        <h1>Your Cart {getTotalProduct()}</h1>
        {addedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
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
            <div className="flex justify-between items-center">
              <p> Order Total </p>
              <span className="font-bold text-2xl">
                {" "}
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="bg-orange-900/20 text-center p-2">
              <div className="flex items-center justify-center gap-2">
                <img src={carbonIcon} alt="carbon neutral icon" />
                This is a <b>carbon-neutral</b> delivery.
              </div>
            </div>
            <Button
              onClick={handleConfirm}
              style="bg-hover hover:bg-orange-800 text-center p-2 text-white"
              text="Order Confirm"
            />
          </div>
        )}

        {isConfirm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-5">
            <ConfirmUI>
              {addedList.map((item) => (
                <CartUI
                  key={item.category}
                  category={item.category}
                  quantity={item.quantity}
                  price={item.price}
                  totalPrice={getTotalProductPrice(item.name)}
                />
              ))}
            </ConfirmUI>
          </div >
        )}
      </section>
    </div>
  );
};

export default CartDisplay;
