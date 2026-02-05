type ProductProp = {
  image: string;
  name: string;
  category: string;
  price: number;
};

export type ProductCardProps = {
  product: ProductProp;
};

export type ProductLayoutProps = {
  children: React.ReactNode;
};

export type CartUIProps = {
  category: string;
  quantity: number;
  price: number;
  totalPrice: number;
  onClick?: () => void;
};

export type Product = {
  image: {
    thumbnail?: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity?: number; // Add this for cart functionality
};

export type CartItems = {
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

export type ButtonProps = {
  text?: string;
  style: string;
  icon?: string;
  onClick?: () => void;
};
