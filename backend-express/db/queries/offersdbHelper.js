// example for querying the database

/**
 * Get all offers from the database given client id.
 * @param {Object} db Dataabse object.
 * @param {Integer} requestId The id of the client.
 * @return {Promise<{}>} A promise to the customer.
 */
const getAllOffers = function (db,id) {
  const query = "select * from offers join requests on offers.request_id = requests.id where requests.client_id=$1";
  return db.query(query,[id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

// /**
//  * Get all offers from the database given their requestId.
//  * @param {String} requestId The id of the request by the user.
//  * @return {Promise<{}>} A promise to the customer.
//  */
//  const getOffersByRequestId = function(db, requestId) {
//   const queryString = `
//     SELECT *
//     FROM offers
//     WHERE request_id = $1;
//     `;
//   const queryParams = [requestId];
//   return db.query(queryString, queryParams)
//     .then((result) => {
//       console.log(result.rows);
//       return result.rows;
//     });
// }

module.exports = {
  getAllOffers,
};