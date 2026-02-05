import type { ProductLayoutProps } from "../../utils/Types";

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return <div className="grid grid-cols-3 gap-3">{children}</div>;
};

export default ProductLayout;
