import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';

import './OfferListItem.scss';
/**
 * Display offer details for specific request
 * @param  props {service_provider_first_name,service_provider_last_name,avg_rating,offer_comment,quote}
 * @returns
 */
const OfferListItem = ({ service_provider_first_name, service_provider_last_name, service_provider_img_url, avg_rating, offer_comment, quote, provider_id, assignOffer }) => {
    const history = useHistory();

    // console.log(history);
    //console.log(props)
    return (
        <div className="offerlistitem-container">
            <div className="offerlistitem-details">
            <br />
                <h2>{service_provider_first_name} {service_provider_last_name}</h2>

                <br />
                <img src={service_provider_img_url} alt="provider-pic" />
                <br />
               <h4> Provider Rating: </h4> <StarRatings rating={avg_rating || 0} starRatedColor="green"
                    numberOfStars={5} />
                <br />
                <h4>Comments on request:  "{offer_comment}"</h4>
                <br />

            </div>
            <div className="offerlist-actions">
                <div className="offerlist-quote">
                    Quoted by provider: <br></br> <b> {quote}</b>
                </div>
                <div className="offerlist-buttons">
                    <Button className="request-service-btn"
                        onClick={() => {
                            assignOffer(provider_id, quote);
                            history.replace({ pathname: "/" + history.location.pathname.split("/")[1] + "/" + history.location.pathname.split("/")[2] + "/" + history.location.pathname.split("/")[3] });
                            //window.location.reload();
                            history.go(-1);
                        }}
                    >
                        Accept Offer
                    </Button>
                    {/* <Button className="request-service-btn"
                    //  onClick={() => history.push(`requests/new`)}
                    >
                        Message service provider
                    </Button> */}
                </div>
            </div>

        </div>
    )
}

export default OfferListItem;
