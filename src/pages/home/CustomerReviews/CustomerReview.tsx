import { Reviews } from "./ReviewData";
import ReviewsCard from "./ReviewsCard";
import "./Review.css";
const CustomerReview = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl pt-10 text-center md:text-start">
        Testimonial Container
      </h1>
      <div>
        {Reviews.map((review, index) => (
          <ReviewsCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
