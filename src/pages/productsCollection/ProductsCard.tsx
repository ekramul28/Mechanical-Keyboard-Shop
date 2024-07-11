import { Avatar, Button, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
type TCard = {
  _id: string;
  image: string;
};
const ProductsCard = ({ _id }: TCard) => {
  return (
    <div className="flex justify-center items-center gap-4 ">
      <Card
        style={{ width: 300, margin: "10px" }}
        cover={
          <img
            className="p-3"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        //     actions={[
        //       <SettingOutlined key="setting" />,
        //       <EditOutlined key="edit" />,
        //       <EllipsisOutlined key="ellipsis" />,
        //     ]}
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
