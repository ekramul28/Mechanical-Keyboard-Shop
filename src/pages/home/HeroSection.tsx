import { Card, Carousel } from "antd";

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
            <h3 className="banner-image1" style={contentStyle}></h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image2" style={contentStyle}>
              2
            </h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image3" style={contentStyle}>
              3
            </h3>
          </Card>
        </div>
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <h3 className="banner-image4" style={contentStyle}>
              4
            </h3>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
