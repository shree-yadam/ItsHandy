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
    usersDbHelper.getUserWithEmail(db, email)
      .then((result) => {
        if (result.password === password) {
          req.session.userId = result.id;
          res.send(result);
        } else {
          res.status(401);
          res.send({error: "Invalid username or password"});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  /* POST logout */
  router.post("/logout", function(req, res) {
    req.session = null;
    res.status(200);
    res.send();
  });

  return router;
};
