import CustomerReview from "../CustomerReviews/CustomerReview";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../heroSection/HeroSection";
import ServiceAdvertisement from "../serviceAdvertisement/ServiceAdvertisement";

const Home = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <HeroSection />
      <FeaturedProducts />
      <CustomerReview />
      <ServiceAdvertisement />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
