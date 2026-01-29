import React, { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItems, Product } from "../utils/Types";

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [addedList, setAddedList] = useState<CartItems[]>([]);

  const handleAddToCart = (product: Product) => {
    const newItem: CartItems = {
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image.desktop,
      quantity: 1,
    };

    setAddedList((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.name === product.name
      );

      if (existingIndex >= 0) {
        // Update quantity
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new item
      return [...prev, newItem];
    });
  };

  const handleDelete = (product: string) => {
    setAddedList((prev) => prev.filter((list) => list.name !== product));
  };

  const getTotalProduct = () => {
    return addedList.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalProductPrice = (productName: string) => {
    return addedList.reduce((total, item) => {
      if (item.name === productName) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const getTotalPrice = () => {
    return addedList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleDecreaseProduct = (product: Product) => {
    setAddedList((prev) =>
      prev
        .map((item) =>
          item.name === product.name && item.quantity > 1
            ? { ...item, quantity: item.quantity-- }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const isProductInCart = (productName: string) => {
    return addedList.findIndex((item) => item.name === productName) >= 0;
  };

  const getQuantity = (productName: string) => {
    const item = addedList.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        addedList,
        handleAddToCart,
        handleDecreaseProduct,
        handleDelete,
        getTotalProduct,
        getTotalPrice,
        getTotalProductPrice,
        isProductInCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
