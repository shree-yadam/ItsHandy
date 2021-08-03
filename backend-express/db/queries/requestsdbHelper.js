/**
 * Get a single customer from the database given their email.
 * @param {int} id The email of the customer.
 * @return {Promise<{}>} A promise to the customer.
 */
const getUserRequestsById = (db, id) => {
  const queryString = `SELECT * FROM requests WHERE client_id = $1`;
  
  return db.query(queryString,[id]).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
};
/**
 * Add a new request to the requests table
 * @param {Object} requestDetails The details of the request including
 * title, street_address, city, category_id, preferred_date, description, client_id
 * @return {Promise<{}>} A promise to the customer.
 */
const addNewRequest = function(db, requestDetails) {

  const queryString = `INSERT INTO requests(title, street_address, city, category_id, preferred_date, description, client_id) VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`;

  const queryParams = [requestDetails.title, requestDetails.street_address, requestDetails.city, requestDetails.category_id, requestDetails.preferred_date === ''? null : preferred_date, requestDetails.description, requestDetails.client_id];
  return db.query(queryString, queryParams)
  .then((result) => {
    console.log("addnewrequest", result.rows);
    return result.rows[0];
    
  })
}
module.exports = {getUserRequestsById, addNewRequest};
