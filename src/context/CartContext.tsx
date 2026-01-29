import { createContext } from "react";
import type { CartItems, Product } from "../utils/Types";

type CartContextProps = {
  addedList: CartItems[];
  handleAddToCart: (productName: Product) => void;
  handleDelete: (product: string) => void;
  handleDecreaseProduct: (product: Product) => void;
  getTotalProduct: () => number;
  getTotalPrice: () => number;
  isProductInCart: (productName: string) => boolean;
  getQuantity: (productName: string) => number;
  getTotalProductPrice: (productName: string) => number;
};

export const CartContext = createContext<CartContextProps | null>(null);
