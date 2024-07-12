import { useCartProductQuery } from "../../redux/features/cart/cartApi";
import CartSummery from "./CartSummery";
import CartTable from "./CartTable";

const Card = () => {
  const email = "mdekramulhassan168@gmail.com";
  const { data, isLoading } = useCartProductQuery(email);
  console.log(data);
  const cartProducts = data?.data ?? [];
  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="min-h-screen grid grid-cols-1  lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[10%] gap-3 px-2">
          <div className="lg:col-span-3">
            <div className="">
              <CartTable cartProduct={cartProducts} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <CartSummery />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
