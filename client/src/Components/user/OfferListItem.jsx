
import Button from 'react-bootstrap/Button';
import './OfferListItem.scss';
import ReviewStars from '../ReviewStars'

/**
 * Display offer details for specific request
 * @param  props {service_provider_first_name,service_provider_last_name,avg_rating,offer_comment,quote}
 * @returns 
 */


const OfferItem = ( {service_provider_first_name,service_provider_last_name,service_provider_img_url,avg_rating,offer_comment,quote}) => {
    //console.log(props)
    return (
        <div className="offerlistitem-container">
            <div className="offerlistitem-details">
            <img src={service_provider_img_url} alt="provider-pic"/>
            <br/>
            Provider Rating: <ReviewStars rating={avg_rating}/>
            <br/>
            Provider Name: {service_provider_first_name} {service_provider_last_name} 
            <br />
            <br/>
            Comments on request:  "{offer_comment}"
            <br />
           
            </div>
            <div className="offerlist-actions">
                <div className="offerlist-quote">
            Quote for this request: <b> {quote}</b>
            </div>
            <div className="offerlist-buttons">
            <Button className="request-service-btn"
            //  onClick={() => history.push(`requests/new`)}
             > 
      Accept Offer
    </Button>
    <Button className="request-service-btn"
            //  onClick={() => history.push(`requests/new`)}
             >
      Message service provider
    </Button>
    </div>
    </div>
        </div>
    )
}

export default OfferItem;
