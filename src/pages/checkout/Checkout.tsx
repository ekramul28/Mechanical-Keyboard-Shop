import CheckoutDetails from "./CheckoutDetails";
import CheckoutOrder from "./CheckoutOrder";

const Checkout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[8%] min-h-[700px] gap-8">
      <CheckoutDetails />
      <CheckoutOrder />
    </div>
  );
};

export default Checkout;
