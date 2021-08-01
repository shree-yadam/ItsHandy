// example for querying the database

const getAllOffers = function (db) {
  const query = "SELECT * FROM offers";
  return db.query(query)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

/**
 * Get all offers from the database given their requestId.
 * @param {String} requestId The id of the request by the user.
 * @return {Promise<{}>} A promise to the customer.
 */
 const getOffersByRequestId = function(db, requestId) {
  const queryString = `
    SELECT *
    FROM offers
    WHERE request_id = $1;
    `;
  const queryParams = [requestId];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
}

module.exports = {
  getAllOffers,
  getOffersByRequestId
};