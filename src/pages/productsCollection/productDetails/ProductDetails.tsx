import { Button, Rate } from "antd";
import { useParams } from "react-router-dom";
import ProductDetailsCarousal from "./ProductDetailsCarousal";
import { useSingleProductQuery } from "../../../redux/features/products/productApi";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(0);
  const { data, isLoading } = useSingleProductQuery(id);
  const product = data?.data;
  console.log(product);

  const handleAddToCart = () => {};
  const handleBookmarked = () => {};

  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="pt-20">
          <div className="min-h-screen ">
            <div className="h-[250px] banner-image2 bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
              <h3 className="text-gray-400 font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                {product?.title}
                <br /> {product?.description}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-8 md:gap-0">
              <div className="md:col-span-3 text-center">
                <ProductDetailsCarousal images={product?.image} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2 ">
                <h1 className="text-4xl font-bold">Name</h1>
                <p className="  font-clashRegular text-gray-600 text-sm">
                  {product?.title}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">${product?.price}</p>
                  <Rate value={product.rating} />
                </div>
                <p className="text-sm mt-10 text-gray-600">
                  {product?.description}
                </p>
                <p className="mt-3 font-medium">Available Quantity</p>
                <div className="flex  items-center gap-4">
                  <div className="w-[35px] h-[35px]  flex  justify-center items-center text-sm bg-white text-black border-black border duration-[.4s] cursor-pointer hover:bg-black hover:text-white">
                    {product?.availableQuantity}
                  </div>
                </div>
                {/* Quantity  */}
                <div className="flex items-center gap-4 mt-3">
                  <p
                    // onClick={() => handleQuantity("-")}
                    className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
                  >
                    -
                  </p>
                  <p className="px-5 py-1 font-semibold border ">
                    {productQuantity}
                  </p>
                  <p
                    // onClick={() => handleQuantity("+")}
                    className=" w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
                  >
                    +
                  </p>
                </div>

                {/* Wishlist */}
                <div className="flex flex-col gap-2 mt-10">
                  <Button
                    onClick={handleAddToCart}
                    className="py-2 text-white bg-black hover:bg-black"
                  >
                    Add To Cart
                  </Button>
                  <Button
                    onClick={handleBookmarked}
                    className="py-2 text-black bg-white border border-black "
                  >
                    Save To Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
