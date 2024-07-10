import { Button } from "antd";

const ProductHeader = () => {
  return (
    <div className="p-20 bg-[#E9E1FC] mt-10 flex justify-center items-center">
      <div>
        <h1 className="font-bold text-[30px]">
          Grab Upto 50% Off on Selected keyBoard
        </h1>
        <Button className="mt-3">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductHeader;
