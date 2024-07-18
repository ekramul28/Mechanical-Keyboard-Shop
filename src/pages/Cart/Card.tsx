import { useCartProductQuery } from "../../redux/features/cart/cartApi";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import CartSummery from "./CartSummery";
import CartTable from "./CartTable";

const Card = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { data, isLoading } = useCartProductQuery(user?.email);
  const cartProducts = data?.data ?? [];
  console.log(cartProducts);
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
