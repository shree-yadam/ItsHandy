const express = require("express");
const router = express.Router();
const providersDbHelper = require("../db/queries/providersDbHelper");

module.exports = (db) => {

  /* GET open listings based on category */
  router.get("/:id/newListings", function (req, res) {
    providersDbHelper.getNewListingByCategory(db, req.params.id)
      .then((result) => {
        console.log("TEST!!: ", result)
        res.json(result)})
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
