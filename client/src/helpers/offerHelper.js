import axios from 'axios';

export const makeOffer = ({
  request_id,
  provider_id,
  quote,
  comment
}) => {
  return axios.post(`api/providers/${provider_id}/offer`, {
    request_id,
    provider_id,
    quote,
    comment
  })
  .then((res) => {
    console.log("Offer posted", res);
  });

}
