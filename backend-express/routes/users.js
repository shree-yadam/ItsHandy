const express = require("express");
const router = express.Router();
const usersDbHelper = require("../db/queries/usersdbHelper");

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

module.exports = (db) => {
  /* GET users listing. */
  router.get("/", function (req, res) {
    usersDbHelper.getUsers(db)
      .then((result) => res.json(result))
      .catch((err) => {
        console.log(err);
      });
  });

  /* POST login */
  router.post("/login", function (req, res) {
    const { email, password } = req.body;
    console.log(email, password)
    usersDbHelper.getUserWithEmail(db, email)
      .then((result) => {
        console.log("user details: ", result);
        if (result.password === password) {
          req.session.userId = result.id;
          res.send(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
