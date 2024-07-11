import { Carousel } from "antd";

const ProductDetailsCarousal = ({ images }: { images: string[] }) => {
  return (
    <div>
      <Carousel autoplay style={{ width: "90%" }}>
        <div>
          {images?.map((image) => (
            <div key={image} className="text-center">
              <img src={image} alt="" className="object-cover" />
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousal;
