import { Button } from "antd";
import CartRow from "./CartRow";
import { TProduct } from "../../redux/features/products/productApi";
type TCardRow = {
  _id: string;
  product: TProduct;
  email: string;
  productQuantity: number;
};

type TCardProduct = {
  cartProduct: TCardRow[];
};
const CartTable = ({ cartProduct }: TCardProduct) => {
  const handleSelectAll = () => {};
  const handleDeleteSelected = () => {};
  return (
    <table className=" no-scrollbar  w-full  ">
      {/* Header */}
      <thead className="grid grid-cols-4 pb-4 border-b font-semibold gap-2">
        <tr
          onClick={handleSelectAll}
          className="flex gap-2 items-center col-span-2 w-max "
        >
          <input type="checkbox" name="" id="select-all" />
          <label
            className="font-extrabold text-[18px]"
            htmlFor="select-all  text-[12px] md:text-sm lg:text-base"
          >
            Select All
          </label>
        </tr>
        {["Quantity", "Total"].map((col) => (
          <tr
            className="col-span-1 font-extrabold text-[12px] md:text-sm lg:text-base"
            key={col}
          >
            {col}
          </tr>
        ))}
      </thead>
      <tbody className="h-[400px] overflow-auto no-scrollbar">
        {cartProduct?.map((product: TCardRow, index: number) => (
          <CartRow
            key={index}
            product={product?.product}
            id={product?._id}
            productQuantity={product?.productQuantity}
          />
        ))}
      </tbody>
      <Button
        onClick={handleDeleteSelected}
        className="w-[35%] md:w-[30%] lg:w-[20%]  py-5 font-bold my-8 rounded-sm font-clashRegular bg-black text-white  border border-black text-sm md:text-base"
      >
        Delete Selected
      </Button>
    </table>
  );
};

export default CartTable;
