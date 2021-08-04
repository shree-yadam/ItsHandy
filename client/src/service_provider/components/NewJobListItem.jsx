import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import makeOffer from '../helpers/makeOffer'
import  './NewJobListItem.scss';

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
    <div className="newlisting-container">
      <div className ="newlisting-info">
      <h2>Title: <strong>{title}</strong></h2>
      <p>Date needed: {date && date.split('T')[0]}</p>
      </div>

      { !madeOffer &&
        <div>
          <div className="make-offer">
          <label>Quote: </label>
          <input placeholder="Enter your quote" name="quote" value={quote} onChange={(event) => setQuote(event.target.value)} />
          <Button className="offer-btn" variant="success" type="submit"  onClick={handleOffer} >
            Make a quick Offer
          </Button>
          </div>
          <Button  variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>
          <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
      </Button>
        </div>
      }
      { madeOffer &&
      <div>
        <p>Quote: {quote}</p>
        <Button  variant="primary" type="submit"  onClick={goToDetails}>
            Details
          </Button>
      
          <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
          Messages
    </Button>
    </div>
      }
  
    </div>
  );
}