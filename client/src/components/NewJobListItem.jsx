import RequestItemInfo from "./RequestItemInfo";
import Button from "./Button";
import React, { useState } from 'react';

export default function NewJobListItem({
  title,
description,
category,
date
}) {
  const [quote, setQuote] = useState("");

  function handleOffer(event) {
    /* TBD */
  }

  function goToDetails(event) {
    /* TBD */
  }

  return (
    <div>

      <RequestItemInfo title={title} description={description} category={category} date={date} />

      <label for="quote">Quote:</label>
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