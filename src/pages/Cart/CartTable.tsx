import { Button } from "antd";
import CartRow from "./CartRow";
import { TProduct } from "../../redux/features/products/productApi";
type TCardRow = {
  _id: string;
  product: TProduct;
  email: string;
};

type TCardProduct = {
  cartProduct: TCardRow[];
};
const CartTable = ({ cartProduct }: TCardProduct) => {
  console.log(cartProduct);
  const handleSelectAll = () => {};
  const handleDeleteSelected = () => {};
  return (
    <table className=" no-scrollbar font-poppins w-full  ">
      {/* Header */}
      <thead className="grid grid-cols-4 pb-4 border-b font-semibold gap-2">
        <tr
          onClick={handleSelectAll}
          className="flex gap-2 items-center col-span-2 w-max "
        >
          <input type="checkbox" name="" id="select-all" />
          <label htmlFor="select-all text-[12px] md:text-sm lg:text-base">
            Select All
          </label>
        </tr>
        {["Quantity", "Total"].map((col) => (
          <tr
            className="col-span-1 text-[12px] md:text-sm lg:text-base"
            key={col}
          >
            {col}
          </tr>
        ))}
      </thead>
      <tbody className="h-[400px] overflow-auto no-scrollbar">
        {/* {cartProducts?.map((cartProduct) => (
              <CartTableRow
                userID={userID}
                handleSelected={handleSelected}
                key={cartProduct._id}
                selectedIds={selectedIds}
                cartProduct={cartProduct}
              />
            ))} */}

        {cartProduct?.map((product: TCardRow, index: number) => (
          <CartRow key={index} product={product?.product} />
        ))}
      </tbody>
      <Button
        onClick={handleDeleteSelected}
        className="w-[35%] md:w-[30%] lg:w-[20%]  py-3 mt-8 rounded-sm font-clashRegular bg-white text-black border border-black text-sm md:text-base"
      >
        Delete Selected
      </Button>
    </table>
  );
};

export default CartTable;
