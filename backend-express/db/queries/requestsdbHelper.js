/**
 * Get a list of requests made by a customer.
 * @param {int} id user_id who is logged in and made the requests.
 * @return {Promise<{}>} A promise to display the requests result.
 */
const getUserRequestsById = (db, id) => {
  const queryString = `SELECT requests.id, requests.title, requests.city, requests.street_address, requests.preferred_date, requests.img_url, requests.description, requests.price, requests.provider_id, requests,date_assigned, categories.name as category_name, users.first_name as service_provider_first_name, users.first_name as service_provider_last_name
  FROM requests
  join categories on(requests.category_id = categories.id)
  left join users on (requests.provider_id = users.id)
  WHERE requests.client_id = $1 AND requests.date_completed IS NULL`;

  return db.query(queryString, [id]).then((result) => {
    //console.log(result.rows);
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

/**
 * Add a new request to the requests table
 * @param {Object} requestDetails The details of the request including
 * title, street_address, city, category_id, preferred_date, description, client_id
 * @return {Promise<{}>} A promise to the customer.
 */
const addNewRequest = function (db, requestDetails) {
  const queryString = `INSERT INTO requests(title, street_address, city, category_id, preferred_date, description, client_id, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;`;

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
    console.log("addnewrequest", result.rows);
    return result.rows[0];
  });
};

/**
 * Update request as completed with date_completed
 * @param {Integer} job_id id of request
 * @param {date_completed} date of completion of job
 * @return {Promise<{}>} A promise to the customer.
 */
 const updateAssignedJob = function (db, job_id, date) {
  console.log("updateAssignedJobs ", job_id);
  const queryString = `
   UPDATE requests SET date_completed = (to_timestamp($1 / 1000.0))
   WHERE requests.id = $2
   RETURNING *;`;
  const queryParams = [date, job_id];
  return db.query(queryString, queryParams).then((result) => {
    console.log(result);
    return result.rows;
  });
};

module.exports = { getUserRequestsById, addNewRequest, deleteRequest, updateAssignedJob };
