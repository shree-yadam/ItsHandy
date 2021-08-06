const express = require("express");
const router = express.Router();
const categoriesDbHelper = require("../db/queries/categoriesdbHelper");

module.exports = (db) => {
  router.get("/categories", (req, res) => {
    categoriesDbHelper
      .getAllCategories(db)
      .then((result) => {
        console.log("TESTING");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
};

