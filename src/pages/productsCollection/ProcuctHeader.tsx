import { Button } from "antd";

const ProductHeader = () => {
  return (
    <div className="p-20 mt-12  banner-image1 flex justify-center items-center h-[300px]">
      <div>
        <h1 className=" font-clashBol  text-[30px] text-gray-400 ">
          Grab Upto 50% Off on Selected keyBoard
        </h1>
        <Button type="primary" className="mt-3 ">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
