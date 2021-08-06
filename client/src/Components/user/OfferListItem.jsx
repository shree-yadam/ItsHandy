import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

/**
 * Display offer details for specific request
 * @param  props {service_provider_first_name,service_provider_last_name,avg_rating,offer_comment,quote}
 * @returns 
 */


const OfferListItem = ({ service_provider_first_name, service_provider_last_name, avg_rating, offer_comment, quote, assignOffer }) => {

    //const history = useHistory();
    //console.log('assignOffer :>> ', typeof assignOffer);
    return (
        <div>
            Service provider Name:{service_provider_first_name} {service_provider_last_name}
            <br />
            Avg rating: {avg_rating}
            <br />
            Comments on request:{offer_comment}
            <br />
            Quote for this offer:<p>{quote}</p>
            <Button className="request-service-btn"
                onClick={() => {
                    assignOffer();
                    // history.push(`requests/new`);
                }}
            >
                Accept Offer
            </Button>
            <Button className="request-service-btn"
            //  onClick={() => history.push(`requests/new`)}
            >
                Message service provider
            </Button>
        </div>
    )
}

export default OfferListItem;
