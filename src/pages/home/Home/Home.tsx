import CustomerReview from "../CustomerReviews/CustomerReview";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Footer from "../footer/Footer";
import HeroSection from "../heroSection/HeroSection";
import NavBar from "../navBar/NavBar";
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
