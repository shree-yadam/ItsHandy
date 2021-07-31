// example for querying the database

const getUsers = function (db) {
  const query = "SELECT * FROM users";
  return db.query(query)
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => console.log(err.message));
};
module.exports = { getUsers };
