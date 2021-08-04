import React, { useState, useEffect } from 'react';


const OfferItem = ({ id, offer_comment, quote }) => {
const [state, setstate] = useState();


    //console.log(props)
    return (
        <div>
            Comments on request:{offer_comment}
            <br />
            Quote for this offer:<p>{quote}</p>
        </div>
    )
}

export default OfferItem;
