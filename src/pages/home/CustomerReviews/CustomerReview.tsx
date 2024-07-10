import { Reviews } from "./ReviewData";
import ReviewsCard from "./ReviewsCard";
import "./Review.css";
const CustomerReview = () => {
  return (
    <div className="reviewMain">
      {Reviews.map((review, index) => (
        <ReviewsCard key={index} {...review} />
      ))}
    </div>
  );
};

export default CustomerReview;
