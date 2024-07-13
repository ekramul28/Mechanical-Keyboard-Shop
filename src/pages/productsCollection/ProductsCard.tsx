import { Button, Card, Rate } from "antd";
import { Link, useLocation } from "react-router-dom";
import { TProduct } from "../../redux/features/products/productApi";

const ProductsCard = ({ _id, image, title, rating, price }: TProduct) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex justify-center items-center gap-4 text-white">
      <Card
        style={{
          width: 400,
          height: 400,
          margin: "10px",
          backgroundColor: "black",
        }}
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
                width={24}
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
          <Button className="font-bold py-4">
            ADD Card
            <svg
              width={24}
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
