/**
 * Get all categories from the database
 * @return {Promise<{}>} A promise containt offers data and provider who made the offer.
 */
 const getAllCategories = function (db) {
  // old query "select * from offers join requests on offers.request_id = requests.id where requests.client_id=$1"
  const query = `SELECT * FROM categories;`;
  return db.query(query).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
};

module.exports = {
  getAllCategories
}