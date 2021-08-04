import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import OfferListItem from './OfferListItem';

const OfferList = (props) => {
    const history = useHistory();

    const [state, setstate] = useState(history && history.location.state);

    return (
        <div>
            <h1>Offers list</h1>
            {state.requestOffer.map(offer => <OfferListItem {...offer} />)}
        </div>
    )
}

export default OfferList
