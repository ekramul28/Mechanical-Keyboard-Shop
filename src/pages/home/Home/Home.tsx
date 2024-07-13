import { Button } from "antd";
import {
  TProduct,
  useProductQuery,
} from "../../../redux/features/products/productApi";
import ProductsCard from "../../productsCollection/ProductsCard";
import CustomerReview from "../CustomerReviews/CustomerReview";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../heroSection/HeroSection";
import ServiceAdvertisement from "../serviceAdvertisement/ServiceAdvertisement";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useProductQuery(undefined);
  const latestSix = data?.data.slice(-6);
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      <div>
        <h1 className="text-4xl font-bold pt-16 pb-6 px-2">
          {" "}
          Latest Product Update
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  justify-center items-center">
          {Array.isArray(latestSix)
            ? latestSix.map((product: TProduct, index: number) => (
                <ProductsCard key={index} {...product} />
              ))
            : "No product here"}
        </div>
        <p className="text-center my-5">
          <Link to="/product">
            <Button className="bg-black text-white font-bold py-7">
              See All Product
            </Button>
          </Link>
        </p>
      </div>

      <CustomerReview />
      <ServiceAdvertisement />
    </div>
  );
};

export default Home;
