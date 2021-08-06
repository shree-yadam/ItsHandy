import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import OfferListItem from './OfferListItem';
/**
 * Displays OfferListItem components for offer details
 * @param {*} props
 * @returns
 */
const OfferList = (props) => {
    const history = useHistory();

    const [state, setstate] = useState(history && history.location.state);

    return (
        <div>
            <h1>Offers list</h1>
            {(!state.requestOffer || state.requestOffer.length === 0 ) && <h3>No Entries!</h3>}
            {state.requestOffer && state.requestOffer.map(offer => <OfferListItem {...offer} />)}
        </div>
    )
}

export default OfferList
