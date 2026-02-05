import ProductList from "./ProductList";
import CartDisplay from "../Cart/CartDisplay";

const Product = () => {
  return (
    <div className="p-5 space-y-3">
      <h1 className="font-family-red-hat-text text-product font-bold text-4xl">
        Desserts
      </h1>
      <main className="flex flex-row gap-5">
        <section className="w-[70%]">
          <ProductList />
        </section>
        <section className="w-[30%]">
          <CartDisplay />
        </section>
      </main>
    </div>
  );
};

export default Product;
