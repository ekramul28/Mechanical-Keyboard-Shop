import CustomerReview from "../CustomerReviews/CustomerReview";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../heroSection/HeroSection";
import ServiceAdvertisement from "../serviceAdvertisement/ServiceAdvertisement";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceAdvertisement />
      <FeaturedProducts />
      <CustomerReview />
    </div>
  );
};

export default Home;
