import axios from "axios";
export default function makeOffer(provider_id, request_id, quote, comment) {
  console.log("makeOffer");
  return axios.post(`api/providers/${provider_id}}/offer`, {
    request_id,
    quote,
    comment
  })
  .then((res) => {
    console.log("Offer posted", res);
  });
}