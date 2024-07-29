import { useState } from "react";
import {
  TProduct,
  useProductQuery,
} from "../../redux/features/products/productApi";
import FilterProducts from "./FilterProducts";
import PaginationCard from "./Pagination";
import ProductHeader from "./ProcuctHeader";
import ProductsCard from "./ProductsCard";

const Products = () => {
  type TObject = {
    name: string;
    value: string;
  };

  const [title, setTitle] = useState<TObject>({ name: "", value: "" });
  const [color, setColor] = useState<TObject>({ name: "", value: "" });
  const [type, setType] = useState<TObject>({ name: "", value: "" });
  const [offer, setOffer] = useState<TObject>({ name: "", value: "" });
  console.log(title);
  console.log(color);
  console.log(type);
  console.log(offer);

  // if (category) {
  // }

  const {
    data: products,
    isLoading,
    error,
  } = useProductQuery([title, color, type, offer]);
  console.log(products);
  return (
    <div className="">
      <ProductHeader />
      <FilterProducts
        setTitle={setTitle}
        setColor={setColor}
        setType={setType}
        setOffer={setOffer}
      />
      <div>
        <h1 className="font-bold text-4xl mt-6 mb-4 ">Card Section</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  justify-center items-center">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading... </>
          ) : products ? (
            <>
              {Array.isArray(products?.data) ? (
                products?.data?.map((card: TProduct, index: number) => (
                  <ProductsCard key={index} {...card} />
                ))
              ) : (
                <div>No products available</div>
              )}
            </>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PaginationCard />
      </div>
    </div>
  );
};

export default Products;
