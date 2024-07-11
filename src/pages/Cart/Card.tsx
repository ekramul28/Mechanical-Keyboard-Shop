import CartSummery from "./CartSummery";
import CartTable from "./CartTable";

const Card = () => {
  return (
    <div>
      <div className="min-h-screen grid grid-cols-1  lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[10%] gap-3 ">
        <div className="lg:col-span-3">
          <div className="">
            <CartTable />
          </div>
        </div>
        <div className="lg:col-span-2">
          <CartSummery />
        </div>
      </div>
    </div>
  );
};

export default Card;
