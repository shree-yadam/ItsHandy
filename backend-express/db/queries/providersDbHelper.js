/**
 * Get new job listing matching the category of the provider
 * @param {Integer} provider_id id of provider
 * @return {Promise<{}>} A promise to the customer.
 */
const getNewListingByCategory = function (db, provider_id) {
  const queryString = `
  SELECT requests.*
  FROM requests
  JOIN provider_categories ON requests.category_id= provider_categories.category_id
  WHERE provider_categories.provider_id = $1 AND requests.provider_id IS NULL
  ORDER BY preferred_date ASC;
     `;
  const queryParams = [provider_id];
  return db.query(queryString, queryParams).then((result) => {
    return result.rows;
  });
};

/**
 * Get unfinished assigned jobs for provider
 * @param {Integer} provider_id id of provider
 * @return {Promise<{}>} A promise to the customer.
 */
const getUnfinishedAssignedJobs = function (db, provider_id) {
  console.log("getUnfinishedAssignedJobs ", provider_id);
  const queryString = `
    SELECT requests.*, categories.name
    FROM requests
    JOIN categories ON requests.category_id = categories.id
    WHERE provider_id = $1 AND requests.date_completed IS NULL
    ORDER BY preferred_date ASC;
     `;
  const queryParams = [provider_id];
  return db.query(queryString, queryParams).then((result) => {
    return result.rows;
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

module.exports = {
  getNewListingByCategory,
  getUnfinishedAssignedJobs,
  updateAssignedJob,
};
