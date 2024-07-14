import { Button } from "antd";
import {
  useCartProductQuery,
  useGetAllProductPriceQuery,
} from "../../redux/features/cart/cartApi";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const CartSummery = () => {
  const email = "mdekramulhassan168@gmail.com";
  const { data } = useGetAllProductPriceQuery(email);
  const cartTotal = data?.data;

  const handelMakePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OEnEtL2pc8251OJIpKkvcI0a5dYheFy8fPTEUoGZcKf5ivh3KFiM2V2G7uP0ks4pIL9oViusE7QFpW76DP4I85100LbdwsY0M"
    );
    const body = {
      email: "mdekramulhassan168@gmail.com",
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `http://localhost:5000/api/v1/Create-checkout-session`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    if (stripe) {
      console.log(session.data.url);
      const result = stripe.redirectToCheckout({
        sessionId: session?.data.id,
      });
    } else {
      console.error("Stripe is not initialized.");
    }

    console.log(result);
  };

  return (
    <div className="lg:px-10 mt-10 lg:mt-0">
      <p className=" text-lg md:text-xl pb-4 border-b font-extrabold">
        SUMMARY
      </p>
      <div className="pt-4 text-sm text-gray-600 pb-5 ">
        <div className="flex justify-between items-center pb-2">
          <p className="font-bold">Subtotal</p>
          <p>${cartTotal ? parseInt(cartTotal?.totalPrice) : 0}</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p className="font-bold">Discount</p>
          <p>${cartTotal ? parseInt(cartTotal?.discountPrice) : 0}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Shipping Fees</p>
          <p className="font-bold">
            ${cartTotal?.totalCart > 0 && cartTotal?.totalPrice > 100 ? 50 : 0}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-y pb-4">
        <p className="text-3xl md:text-4xl  font-bold ">Total</p>
        <p className="text-xl  font-semibold ">
          {cartTotal ? parseInt(cartTotal.total) : 0}$
        </p>
      </div>

      <Button
        onClick={handelMakePayment}
        className="w-full bg-black py-5 text-white font-bold  mt-6 rounded-sm  "
      >
        Check Out
      </Button>

      <div className="mt-4 text-[12px] text-center">
        <p>Shop Smart, Ship Free</p>
      </div>
    </div>
  );
};

export default CartSummery;
