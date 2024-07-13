import { Button } from "antd";
import { useGetAllProductPriceQuery } from "../../redux/features/cart/cartApi";
import { NavLink } from "react-router-dom";

const CartSummery = () => {
  const email = "mdekramulhassan168@gmail.com";
  const { data } = useGetAllProductPriceQuery(email);
  const cartTotal = data?.data;
  return (
    <div className="lg:px-10 mt-10 lg:mt-0">
      <p className=" font-poppins font-bold text-lg md:text-xl pb-4 border-b">
        SUMMARY
      </p>
      <div className="pt-4 text-sm text-gray-600 pb-5 ">
        <div className="flex justify-between items-center pb-2">
          <p>Subtotal</p>
          <p>${cartTotal ? parseInt(cartTotal?.totalPrice) : 0}</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p>Discount</p>
          <p>${cartTotal ? parseInt(cartTotal?.discountPrice) : 0}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping Fees</p>
          <p>
            ${cartTotal?.totalCart > 0 && cartTotal?.totalPrice > 100 ? 50 : 0}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-y pb-4">
        <p className="text-3xl md:text-4xl font-poppins font-base">Total</p>
        <p className="text-xl font-poppins font-semibold ">
          {cartTotal ? parseInt(cartTotal.total) : 0}$
        </p>
      </div>
      <NavLink to="/checkout">
        <Button className="w-full bg-black text-white font-bold py-3 mt-6 rounded-sm font-clashSemibold ">
          Check Out
        </Button>
      </NavLink>
      <div className="mt-4 text-[12px] text-center">
        <p>Shop Smart, Ship Free</p>
      </div>
    </div>
  );
};

export default CartSummery;
