import { useGetAllProductPriceQuery } from "../../redux/features/cart/cartApi";

const CheckoutOrder = () => {
  const { data } = useGetAllProductPriceQuery("mdekramulhassan168@gmail.com");
  const cartTotal = data?.data;
  return (
    <div className="order-4 md:order-1 w-[90%] mx-auto lg:col-span-2">
      <h1 className=" mb-16 border-b-2 border-[#EBEBEB] w-max font-bold text-2xl">
        Your Order
      </h1>
      <table className="w-full">
        <thead className="w-full ">
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1">
            <th className="col-span-3 clear-start font-bold text-xl">
              Product
            </th>
            <th className="col-span-2 pb-5 font-bold text-xl">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2">
            <td className="col-span-3">TotalCart</td>
            <td className={`col-span-2`}>{data?.data?.totalCart}</td>
          </tr>
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2">
            <td className="col-span-3">Subtotal</td>
            <td className={`col-span-2`}>
              {" "}
              {cartTotal ? parseInt(cartTotal.totalPrice) : 0}$
            </td>
          </tr>
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2">
            <td className="col-span-3">Discount</td>
            <td className={`col-span-2`}>
              {cartTotal ? parseInt(cartTotal?.discountPrice) : 0}$
            </td>
          </tr>
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2">
            <td className="col-span-3">Shoping</td>
            <td className={`col-span-2`}>
              $
              {cartTotal?.totalCart > 0 && cartTotal?.totalPrice > 100 ? 50 : 0}
            </td>
          </tr>
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2">
            <td className="col-span-3">Total</td>
            <td className={`col-span-2`}>
              {cartTotal ? parseInt(cartTotal.total) : 0}$
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutOrder;
