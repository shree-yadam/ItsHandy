/**
 * Get reviews for a particular client
 * @param {Integer} client_id id of client
 * @return {Promise<{}>} A promise to the customer.
 */
 const getReviewByClientId = function (db, client_id) {
  const queryString = `
  SELECT *
  FROM reviews
  WHERE client_id = $1 `;
  const queryParams = [client_id];
  return db.query(queryString, queryParams)
  .then((result) => {
    return result.rows;
  });
};

/**
 * Add reviews for a provider for a request
 * @param {Integer} client_id id of client
 * @param {Integer} provider_id id of provider
 * @param {Integer} request_id id of request
 * @param {Integer} rating id of rating
 * @return {Promise<{}>} A promise to the customer.
 */
 const addReviewForRequest = function (db, client_id, provider_id, request_id, rating) {
  const queryString = `
  INSERT INTO reviews(client_id, provider_id, request_id, review)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`
  const queryParams = [client_id, provider_id, request_id, rating];
  return db.query(queryString, queryParams)
  .then((result) => {
    return result.rows[0];
  });
};


module.exports = {
  getReviewByClientId,
  addReviewForRequest
};
