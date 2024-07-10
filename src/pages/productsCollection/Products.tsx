import FilterProducts from "./FilterProducts";
import ProductHeader from "./ProcuctHeader";

const Products = () => {
  return (
    <div className="h-screen">
      <ProductHeader />
      <FilterProducts />
      <h1>product</h1>
    </div>
  );
};

export default Products;
