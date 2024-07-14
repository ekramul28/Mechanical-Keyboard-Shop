import CheckoutForm from "./CheckoutForm";

const CheckoutDetails = () => {
  return (
    <>
      <div className=" lg:col-span-3 relative min-h-[700px]">
        <h1 className=" mb-16 border-b-2 border-[#EBEBEB] font-bold text-2xl w-max">
          Your Details
        </h1>
        <div className="flex gap-5 mb-7">
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="w-[12px] h-[12px] rounded-full  bg-black"></p>
            <p className="font-bold text-xl ">Payment</p>
          </div>
        </div>
        <CheckoutForm />
        {/* <CheckoutCustomerForm customerActive={customerActive} />
      <Elements stripe={stripePromise}>
        <CheckoutPaymentForm customerActive={customerActive} />
      </Elements> */}
      </div>
    </>
  );
};

export default CheckoutDetails;
