import CustomerReview from "../CustomerReviews/CustomerReview";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../heroSection/HeroSection";
import ServiceAdvertisement from "../serviceAdvertisement/ServiceAdvertisement";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <CustomerReview />
      <ServiceAdvertisement />
    </div>
  );
};

export default Home;
