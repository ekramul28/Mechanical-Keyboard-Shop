import { Button, Card, Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const HeroSection = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image1" style={contentStyle}>
              <div className=" mt-12 flex justify-center items-center h-full w-full]">
                <h1 className="text-gray-400 flex justify-center items-center font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                  Experience the tactile feedback and <br />
                  durability of our mechanical keyboards. Perfect for gaming and
                  professional use
                </h1>
                {/* <Button className="mt-3">Buy Now</Button> */}
              </div>
            </h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image2" style={contentStyle}>
              <div className=" mt-12 flex justify-center items-center h-full w-full]">
                <h1 className="text-gray-400 flex justify-center items-center font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                  Mechanical keyboards use individual switches for each key,
                  providing tactile <br /> feedback and durability. Membrane
                  keyboards use a single membrane for all keys, offering a
                  quieter and softer typing experience.
                </h1>
                {/* <Button className="mt-3">Buy Now</Button> */}
              </div>
            </h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image3" style={contentStyle}>
              <div className=" mt-12 flex justify-center items-center h-full w-full]">
                <h1 className="text-gray-400 flex justify-center items-center font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                  Discover the perfect keyboard to enhance your typing and{" "}
                  <br /> gaming experience. Browse our wide selection of
                  mechanical, membrane, and wireless keyboards. Enjoy exclusive
                  deals and fast shipping!
                </h1>
                {/* <Button className="mt-3">Buy Now</Button> */}
              </div>
            </h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image4" style={contentStyle}>
              <div className=" mt-12 flex justify-center items-center h-full w-full]">
                <h1 className="text-gray-400 flex justify-center items-center font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                  Enjoy the quiet and soft touch of our <br /> membrane
                  keyboards. Ideal for everyday typing and office work.
                </h1>
                {/* <Button className="mt-3">Buy Now</Button> */}
              </div>
            </h3>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
