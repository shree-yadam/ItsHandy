const express = require("express");
const router = express.Router();
const usersdbHelper = require("../db/queries/usersdbHelper");

module.exports = (db) => {
  /* GET users listing. */
  router.get("/", function (req, res) {
    usersdbHelper.getUsers(db).then((result) => res.json(result));
  });

  return router;
};
