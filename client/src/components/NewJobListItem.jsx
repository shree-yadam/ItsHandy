import RequestItemInfo from "./RequestItemInfo";
import Button from "./Button";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function NewJobListItem({
  id,
  title,
  description,
  category,
  date,
  img_url
  }) {
  const [quote, setQuote] = useState("");

  // Browser History
  const history = useHistory();

  function handleOffer(event) {
    /* TBD */
  }

  // Show listing details component
  function goToDetails(event) {
    console.log("goToDetails")
    console.log(id,
      title,
      description,
      category,
      date);

    history.push({
      pathname: "/new_listing_detail",
      state: {
        id,
        title,
        description,
        category,
        date,
        img_url
      }});

  }

  return (
    <div>


      <RequestItemInfo title={title} description={description} category={category} date={date} />

      <label>Quote:</label>
      <input name="quote" value={quote} onChange={(event) => setQuote(event.target.value)} />
      <Button variant="primary" type="submit"  onClick={handleOffer}>
          Make a quick Offer
        </Button>

        <Button variant="primary" type="submit"  onClick={goToDetails}>
         Details
        </Button>
    </div>
  );
}