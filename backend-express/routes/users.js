const express = require("express");
const router = express.Router();
const usersDbHelper = require("../db/queries/usersdbHelper");

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

module.exports = (db) => {
  /* GET users listing. */
  router.get("/", function (req, res) {
    usersDbHelper.getUsers(db)
      .then((data) => res.json(data))
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
      .then((data) => {
        if (data.password === password) {
          req.session.userId = data.id;
          res.send(data);
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
    usersDbHelper.getUserWithEmail(db, req.body.email)
    .then((data) => {
      if(!data) {usersDbHelper.addNewClient(db, req.body)
        .then((data) => {
          console.log(data);
          req.session.userId = data.id;
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send();
        });
      } else {
        res.status(409).send();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });

  });

  return router;
};
