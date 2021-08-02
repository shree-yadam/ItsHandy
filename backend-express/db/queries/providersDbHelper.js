/**
 * Get new job listing matching the category of the provider
 * @param {Integer} provider_id id of provider
 * @return {Promise<{}>} A promise to the customer.
 */
const getNewListingByCategory = function(db, provider_id) {
  const queryString = `
    SELECT requests.*
    FROM requests
    JOIN provider_categories ON requests.category_id= provider_categories.category_id
    WHERE provider_categories.provider_id = $1 AND requests.provider_id IS NULL
    ORDER BY preferred_date ASC
     `;
  const queryParams = [provider_id];
  return db.query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    });
}

module.exports = {
  getNewListingByCategory
};