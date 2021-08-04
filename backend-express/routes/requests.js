const express = require("express");
const router = express.Router();
const requestsdbHelper = require("../db/queries/requestsdbHelper");
const offersdbHelpers = require("../db/queries/offersdbHelper");
/**
 * Get requests from the database given their id.
 * @param {String} id The id of the customer.
 * @return {Promise<{}>} A promise that includes the requests data.
 */
module.exports = (db) => {
  router.get("/:id/requests", (req, res) => {
    console.log(req.params.id)
    requestsdbHelper
      .getUserRequestsById(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));  
  
    });
// creates a new request in the database
    router.post("/:id/requests", (req, res) => {
      console.log("In request form post", req.body)
      requestsdbHelper.addNewRequest(db, req.body)
      .then((result) => res.send(result))
    });

  // Gets all offers for user effects
  router.get("/:id/requests/offers", (req, res) => {
    offersdbHelpers
      .getAllOffers(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });
  return router;
};
