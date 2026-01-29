import React from "react";
import ProductList from "./ProductList";
import CartDisplay from "../Cart/CartDisplay";

const Product = () => {
  return (
    <div>
      <h1 className="font-family-red-hat-text text-product font-bold text-4xl">
        Desserts
      </h1>
      <main className="flex">
        <ProductList />
        <CartDisplay />
      </main>
    </div>
  );
};

export default Product;
