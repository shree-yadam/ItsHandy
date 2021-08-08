const { request } = require("express");

/**
 * Get a list of requests made by a customer.
 * @param {int} id user_id who is logged in and made the requests.
 * @return {Promise<{}>} A promise to display the requests result.
 */
const getUserRequestsById = (db, id) => {
  console.log("getUserRequestsById");
  const queryString = `SELECT requests.id, requests.title, requests.city, requests.street_address, requests.preferred_date, requests.img_url, requests.description, requests.price, requests.provider_id, requests,date_assigned, categories.name as category_name, users.first_name as service_provider_first_name, users.last_name as service_provider_last_name
  FROM requests
  join categories on(requests.category_id = categories.id)
  left join users on (requests.provider_id = users.id)
  WHERE requests.client_id = $1 AND requests.date_completed IS NULL
  ORDER BY requests.id DESC;`;

  return db.query(queryString, [id]).then((result) => {
    //console.log(result.rows);
    return result.rows;
  });
};

/**
 * Get a list of requests completed for a customer.
 * @param {int} id user_id who is logged in and made the requests.
 * @return {Promise<{}>} A promise to display the requests result.
 */
 const getUserRequestsCompletedById = (db, id) => {
  const queryString = `SELECT requests.id, requests.title, requests.city, requests.street_address, requests.preferred_date, requests.img_url, requests.description, requests.price, requests.provider_id, requests.date_completed, categories.name as category_name, users.first_name as service_provider_first_name, users.last_name as service_provider_last_name, reviews.review
  FROM requests
  join categories on(requests.category_id = categories.id)
  left join users on (requests.provider_id = users.id)
  join reviews on (requests.provider_id = reviews.provider_id AND requests.client_id = reviews.client_id)
  WHERE requests.client_id = $1 AND requests.date_completed IS NOT NULL
  ORDER BY requests.id DESC`;

  return db.query(queryString, [id]).then((result) => {
    // console.log("this is get requ by id", result.rows);
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

/* Delete a request to the requests table
 * @param {Object} request_id id of request to be deleted
 * @return {Promise<{}>} A promise to the customer.
 */
const deleteRequest = function (db, request_id) {
  const queryString = `
  DELETE FROM requests
  WHERE requests.id = $1
  RETURNING *;`;

  const queryParams = [request_id];
  return db.query(queryString, queryParams).then((result) => {
    console.log("deleteNewRequest", result.rows);
    return result.rows[0];
  });
};

const updateRequest = function (db, request_id, title, city, street_address, preferred_date, img_url, description, category_id) {
  const queryString = `
  UPDATE requests SET
  title = $2, city = $3, street_address = $4, preferred_date = $5, img_url = $6, description = $7, category_id = $8
  WHERE requests.id = $1
  RETURNING *;`;

  const queryParams = [request_id, title, city, street_address, preferred_date, img_url, description, category_id];
  return db.query(queryString, queryParams).then((result) => {
    // console.log("update Request", result.rows);
    return result.rows[0];
  });
};

/**
 *
 * @param {db} dbConnection
 * @param {provider_id} provider_id takes the provider id to be assigned to this request(whose offer was accepted)
 * @param {request_id} request_id takes the request to update
 * @param {price} price gets price from the quote on the request to update in price column
 */
const acceptOffer = function (db, provider_id, price, client_id, request_id) {
  // console.log(db, provider_id, price, client_id, request_id);

  const queryString = `UPDATE requests
  SET date_assigned = CURRENT_DATE, provider_id= $1, price= $2, client_id=$3
  WHERE id = $4;`;

  const queryParams = [provider_id, price, client_id, request_id];

  return db
    .query(queryString, queryParams)
    .then((res) => {
      console.log("updated successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Add a new request to the requests table
 * @param {Object} requestDetails The details of the request including
 * title, street_address, city, category_id, preferred_date, description, client_id
 * @return {Promise<{}>} A promise to the customer.
 */
const addNewRequest = function (db, requestDetails) {
  const queryString = `INSERT INTO requests(title, street_address, city, category_id, preferred_date, description, client_id, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;`;
  // console.log("addNewRequest" , requestDetails)

  const queryParams = [
    requestDetails.title,
    requestDetails.street_address,
    requestDetails.city,
    requestDetails.category_id,
    requestDetails.preferred_date === "" ? null : requestDetails.preferred_date,
    requestDetails.description,
    requestDetails.client_id,
    requestDetails.img_url,
  ];
  return db.query(queryString, queryParams).then((result) => {
    //console.log("add new request", result.rows);
    return result.rows[0];
  });
};

const getClientForRequest = function(db, request_id) {
  const queryString = `
  SELECT users.phone_number, users.first_name, users.last_name, requests.title
  FROM users
  JOIN requests ON users.id = requests.client_id
  WHERE requests.id = $1;`;
  // console.log("addNewRequest" , requestDetails)

  const queryParams = [ request_id ];
  return db.query(queryString, queryParams).then((result) => {
    //console.log("add new request", result.rows);
    return result.rows[0];
  });
}

/**
 * Update request as completed with date_completed
 * @param {Integer} job_id id of request
 * @param {date_completed} date of completion of job
 * @return {Promise<{}>} A promise to the customer.
 */
const updateAssignedJob = function (db, job_id, date) {
  //console.log("updateAssignedJobs ", job_id);
  const queryString = `
   UPDATE requests SET date_completed = (to_timestamp($1 / 1000.0))
   WHERE requests.id = $2
   RETURNING *;`;
  const queryParams = [date, job_id];
  return db.query(queryString, queryParams).then((result) => {
    //console.log(result);
    return result.rows;
  });
};


module.exports = {
  getUserRequestsById,
  addNewRequest,
  deleteRequest,
  updateAssignedJob,
  acceptOffer,
  getUserRequestsCompletedById,
  getClientForRequest,
  updateRequest
};
