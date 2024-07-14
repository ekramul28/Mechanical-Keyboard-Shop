import { Button, Card, Rate } from "antd";
import { Link, useLocation } from "react-router-dom";
import { TProduct } from "../../redux/features/products/productApi";
import { useAddProductMutation } from "../../redux/features/cart/cartApi";
import { toast } from "sonner";

const ProductsCard = ({ _id, image, title, rating, price }: TProduct) => {
  const [addProduct] = useAddProductMutation();
  const handleAddToCart = async (id: string) => {
    const data = {
      product: id,
      productQuantity: 0,
      email: "mdekramulhassan168@gmail.com",
    };
    try {
      const result = await addProduct(data);
      if (result?.data?.success) {
        toast.success("Product Add Successfully");
      }
      if (result?.error?.data) {
        toast.success(`${result?.error?.data?.message}`);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center gap-4 text-white">
      <Card
        className="w-full h-[400px] md:h-[420px] m-2 bg-black"
        cover={
          <img
            className="p-2 w-full h-44 object-cover"
            alt={title}
            src={image[0]}
          />
        }
      >
        <div className="text-white text-center">
          <div>
            <h2 className="font-bold text-xl">{title}</h2>
          </div>
          <h1 className="text-lg font-semibold p-2">${price}</h1>
          <div className=" pl-2">
            <Rate value={rating}></Rate>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-5 font-bold">
          <Link to={`/product/${_id}`}>
            <Button className="font-bold py-4">
              Details
              <svg
                width="100%"
                height={24}
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </Button>
          </Link>
          <Button
            onClick={() => handleAddToCart(_id)}
            className="font-bold py-4"
          >
            ADD Card
            <svg
              width="100%"
              height={24}
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductsCard;
