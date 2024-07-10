type TReview = {
  color: string;
  rating: number;
  review: string;
  authorName: string;
  authorPosition: string;
  authorCompany: string;
  imageUrl: string;
  brand: string;
};
import { Rate } from "antd";
import "./Review.css";

const ReviewsCard = ({
  color,
  rating,
  review,
  authorName,
  authorPosition,
  authorCompany,
  imageUrl,
  brand,
}: TReview) => {
  return (
    <div className="cardContainer ">
      <div className="card " style={{ backgroundColor: color }}>
        <div className="testimonialContainer">
          <div className="testimonialImageContainer ">
            <img
              src={imageUrl}
              alt=""
              className="testimonialImage object-cover "
            />
          </div>
          <div className="testimonialContent ">
            <div className="mt-5">
              <Rate allowHalf value={rating} disabled />
            </div>
            <p className="testimonialText">{review}</p>
            <div className="testimonialAuthor">
              <div className="testimonialAuthorDetails">
                <p className="testimonialAuthorName">{authorName}</p>
                <p className="testimonialAuthorPosition">{authorPosition}</p>
              </div>
              <p className="testimonialBrand">{brand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;