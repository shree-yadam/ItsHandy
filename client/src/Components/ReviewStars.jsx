import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";

export default function ReviewStars(props) {
  const [rating, setRating] = useState(props.rating);

  //sets new rating on the stars when you click on number of stars you want to select for the provider
  function changeRatings(newRating, name) {
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
      changeRating={changeRatings} //changeRating function for function
    />
  );
}