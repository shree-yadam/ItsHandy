import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import makeOffer from '../helpers/makeOffer'

export default function NewJobListItem({
  id,
  title,
  description,
  category,
  date,
  img_url,
  currentUser
  }) {
  const [quote, setQuote] = useState("");
  const [madeOffer, setMadeOffer] = useState(false);

  // Browser History
  const history = useHistory();

  function handleOffer(){
    makeOffer(currentUser.id, id, quote, "")
    .then (() => {
      setMadeOffer(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function checkMessages(){
    /*TBD */
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
      <h2>Title: <strong>{title}</strong></h2>
      <p>Date needed: {date && date.split('T')[0]}</p>


      { !madeOffer &&
        <div>
          <label>Quote:</label>
          <input name="quote" value={quote} onChange={(event) => setQuote(event.target.value)} />
          <Button variant="primary" type="submit"  onClick={handleOffer} >
            Make a quick Offer
          </Button>
          <Button variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>
        </div>
      }
      { madeOffer &&
      <div className="offer-button">
        <p>Quote: {quote}</p>
      </div>
      }
      <Button variant="primary" type="submit"  onClick={checkMessages}>
            Messages
      </Button>
    </div>
  );
}