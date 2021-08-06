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
 * Add Category for provider
 * @param {Integer} provider_id id of provider
 * @return {Promise<{}>} A promise to the customer.
 */
 const addCategoryForProvider = function (db, provider_id, category_id) {
  console.log("addCategoryForProvider ", provider_id, category_id);
  const queryString = `
   INSERT INTO provider_categories (provider_id, category_id)
   VALUES ($1, $2)
   RETURNING *;
     `;
  const queryParams = [provider_id, category_id];
  return db.query(queryString, queryParams).then((result) => {
    return result.rows[0];
  });
};

module.exports = {
  getNewListingByCategory,
  getUnfinishedAssignedJobs,
  addCategoryForProvider
};
