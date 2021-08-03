/**
 * Get a list of requests made by a customer.
 * @param {int} id user_id who is logged in and made the requests.
 * @return {Promise<{}>} A promise to display the requests result.
 */
const getUserRequestsById = (db, id) => {
  const queryString = 
  `SELECT requests.id, requests.title, requests.city, requests.street_address, requests.preferred_date, requests.img_url, requests.description, requests.price, categories.name as category_name
  FROM requests join categories on(requests.category_id = categories.id)
  WHERE requests.client_id = $1 AND requests.date_completed IS NULL`;

  return db.query(queryString, [id]).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
};


// /**
//  * Get a list of offers made for a single request.
//  * @param {int} id The id of the request that was submitted by the customer.
//  * @return {Promise<{}>} contains data of all offers to that request.
//  */
// const getOffersByRequestId = (db,id) =>{
//   `select * from offers where request_id = $1`;

//   return db.query(queryString, [id]).then((result) => {
//     console.log(result.rows);
//     return result.rows;
//   });
// }

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
