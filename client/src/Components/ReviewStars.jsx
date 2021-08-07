import StarRatings from "react-star-ratings";

export default function ReviewStars({rating, setRating}) {

  //sets new rating on the stars when you click on number of stars you want to select for the provider
  function changeRatings(newRating, name) {
    setRating(newRating);
  }
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