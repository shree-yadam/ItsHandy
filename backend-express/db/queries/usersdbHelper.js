
// example for querying the database
const getUsers = function (db) {
  const queryString = "SELECT * FROM users";
  return db.query(queryString)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

/**
 * Get a single customer from the database given their email.
 * @param {String} email The email of the customer.
 * @return {Promise<{}>} A promise to the customer.
 */
 const getUserWithEmail = function(db, email) {
  const queryString = `
    SELECT *
    FROM users
    WHERE email = $1;
    `;
  const queryParams = [email];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}

module.exports = {
  getUsers,
  getUserWithEmail
};