import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";

export default function ReviewStars(props) {
  const [rating, setRating] = useState(props.rating);
  function changeRating(newRating, name) {
    setRating(newRating);
  }
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  console.log(rating);
  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      name="rating"
    />
  );
}