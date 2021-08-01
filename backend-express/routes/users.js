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
    if(req.session.userId) {
      res.status(400).send();
      return;
    }
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
        res.status(500).send();
      });
  });

  /* POST logout */
  router.post("/logout", function(req, res) {
    req.session = null;
    res.status(200);
    res.send();
  });

  /* POST REGISTER */
  router.post("/register", function (req, res) {
    console.log("In register: ", req.body);
    if(req.session.userId) {
      console.log("User already logged in");
      res.status(400).send();
      return;
    }
    //TBD: Check if email already exists in DB
    usersDbHelper.addNewClient(db, req.body)
    .then((result) => {
      req.session.userId = result.id;
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
  });

  return router;
};
