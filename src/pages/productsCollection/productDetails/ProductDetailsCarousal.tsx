import { Carousel } from "antd";

const ProductDetailsCarousal = ({ images }: { images: string[] }) => {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    textAlign: "center",
    width: "90%",
  };
  return (
    <div>
      <Carousel autoplay>
        {images?.map((image) => (
          <div key={image} className="text-center">
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src={image}
                  alt="image"
                  className="object-cover"
                />
              </h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousal;
