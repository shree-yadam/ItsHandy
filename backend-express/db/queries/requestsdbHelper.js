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
module.exports = {getUserRequestsById};
