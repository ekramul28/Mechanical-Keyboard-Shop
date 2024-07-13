import { useState } from "react";
import QuantityBtn from "../../components/quantitybtn/QuantityBtn";
import {
  useDeleteProductCartMutation,
  useUpdateProductCartMutation,
} from "../../redux/features/cart/cartApi";
import { TProduct } from "../../redux/features/products/productApi";
type TCardRow = {
  product: TProduct;
  id: string;
  productQuantity: number;
};
type TUpdateData = {
  id: string;
  data: object;
};
const CartRow = ({ product, id, productQuantity }: TCardRow) => {
  const [Quantity, setQuantity] = useState(
    productQuantity ? productQuantity : 0
  );
  const [deleteProductCart] = useDeleteProductCartMutation();
  const [updateProductCart] = useUpdateProductCartMutation();
  const handleSelected = (e: string, _id: string) => {};
  const handleQuantity = async (e: string) => {
    if (e === "+") {
      setQuantity(Quantity + 1);
      const updateData: TUpdateData = {
        id: id,
        data: {
          productQuantity: Quantity + 1,
        },
      };
      const result = await updateProductCart(updateData);
      console.log(result);
    }
    if (e === "-" && Quantity > 0) {
      setQuantity(Quantity - 1);
      const updateData: TUpdateData = {
        id: id,
        data: {
          productQuantity: Quantity - 1,
        },
      };
      const result = await updateProductCart(updateData);
      console.log(result);
    }
    // const updateData: TUpdateData = {
    //   id: id,
    //   data: {
    //     productQuantity: Quantity + 1,
    //   },
    // };
    // const result = await updateProductCart(updateData);
    // console.log(result);
  };
  return (
    <>
      <tr className="grid grid-cols-4 border-b pb-4 mt-2 overflow-scroll min-w-[500px] no-scrollbar">
        <td className="flex  col-span-2 justify-between">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => handleSelected(e, product._id)}
            // checked={selectedIds[_id] || false}
          />
          <div className="w-[15%] lg:w-[20%] ">
            <img
              src={product?.image[0]}
              alt=""
              className="w-full h-full object-cover bg-[#F0F0F4] p-1"
            />
          </div>
          <div className="flex flex-col justify-center w-[50%] gap-1">
            <p className=" font-poppins font-bold text-sm md:text-base">
              {product?.title}
            </p>
            <p className="text-[10px] lg:text-[12px] text-gray-400">
              {product?.keyboardType}
            </p>
            <p className=" font-clashRegular text-sm">
              $ {parseInt(product?.price) * Quantity}
            </p>
          </div>
        </td>
        <td className="col-span-1 flex flex-col  justify-center pb-[10%]">
          <QuantityBtn
            productQuantity={Quantity}
            handleQuantity={handleQuantity}
          />
        </td>
        <td className="col-span-1 flex flex-col justify-center">
          <div className="flex justify-between">
            <p className=" font-clashRegular text-sm">
              ${parseInt(product?.price) * Quantity}
            </p>
            <div
              onClick={() => deleteProductCart(deleteProductCart(id))}
              className="bg-red-500 text-white flex justify-center items-center p-1 rounded-full active:scale-95 divide-blue-[.4s]"
            >
              <svg
                height="24"
                width="24"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            {/* <DeleteButton id={_id} /> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default CartRow;
