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
  imageUrl,
  brand,
}: TReview) => {
  return (
    <div className="cardContainer text-white">
      <div className="card rounded-xl" style={{ backgroundColor: color }}>
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
            <p className="testimonialText my-3 font-bold">{review}</p>
            <div className="testimonialAuthor">
              <div className="testimonialAuthorDetails">
                <p className="testimonialAuthorName font-bold">{authorName}</p>
                <p className="testimonialAuthorPosition">{authorPosition}</p>
              </div>
              <p className="testimonialBrand ml-3 font-bold">{brand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
