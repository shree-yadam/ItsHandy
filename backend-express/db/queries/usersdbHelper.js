
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
/**
 * Get a single customer from the database given their id.
 * @param {Integer} id The id of the customer.
 * @return {Promise<{}>} A promise to the customer.
 */
 const getUserWithId = function(db, id) {
  const queryString = `
    SELECT first_name, last_name, email, phone_number, img_url, avg_rating
    FROM users
    WHERE id = $1;
    `;
  const queryParams = [id];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}


//for provider
/**
 * Get a single customer from the database given their id.
 * @param {Integer} id The id of the provider.
 * @return {Promise<{}>} A promise to the customer.
 */
 const getProviderByTruthiness = function(db, id) {
  const queryString = `
    SELECT first_name, last_name, email, phone_number, img_url, avg_rating, is_provider
    FROM users
    WHERE users.id = $1 AND is_provider = true;
    `;
  const queryParams = [id];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}

/**
 * Add a new client to the users table
 * @param {Object} userDetails The details of the customer including
 * first_name, last_name, phone_number, email, password, img_url and
 * is_provider
 * @return {Promise<{}>} A promise to the customer.
 */
 const addNewClient = function(db, userDetails) {
   console.log("addNewClient: ", userDetails);
  const queryString = `
  INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;
    `;
  const queryParams = [
    userDetails.first_name,
    userDetails.last_name,
    userDetails.email,
    userDetails.password,
    userDetails.phone_number,
    userDetails.img_url,
    userDetails.is_provider
  ];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}

/**
 * update user avg_rating
 * @param {Object} id user ID
 * @return {Promise<{}>} A promise to the customer.
 */
 const updateAverageRatingForID = function(db, id) {
   console.log("Updating provider review: ", id);
 const queryString = `
  WITH subq AS ( SELECT round(AVG(review), 4) as average FROM reviews WHERE reviews.provider_id = $1)
  UPDATE users
  SET avg_rating = subq.average FROM subq WHERE users.id = $1
  RETURNING *;
   `;
 const queryParams = [id];
 return db.query(queryString, queryParams)
   .then((result) => {
     console.log(result.rows);
     return result.rows[0];
   });
}

module.exports = {
  getUsers,
  getUserWithEmail,
  addNewClient,
  getUserWithId,
  getProviderByTruthiness,
  updateAverageRatingForID
};