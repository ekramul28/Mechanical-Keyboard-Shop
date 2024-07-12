import { Avatar, Button, Card } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../redux/features/products/productApi";

const { Meta } = Card;

const ProductsCard = ({ _id, image, title }: TProduct) => {
  console.log(image);
  return (
    <div className="flex justify-center items-center gap-4 ">
      <Card
        style={{ width: 300, margin: "10px" }}
        cover={
          <img
            className="p-3 w-full h-40 object-cover"
            alt={title}
            src={image[0]}
          />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Card title"
          description="This is the description"
        />
        <div className="flex justify-center items-center mt-5">
          <Link to={`/product/${_id}`}>
            <Button>Details</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ProductsCard;
