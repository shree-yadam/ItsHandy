const express = require("express");
const router = express.Router();
const requestsdbHelper = require("../db/queries/requestsdbHelper");
const offersdbHelpers = require("../db/queries/offersdbHelper");
const usersdbHelper = require("../db/queries/usersdbHelper");
/**
 * Get requests from the database given their id.
 * @param {String} id The id of the customer.
 * @return {Promise<{}>} A promise that includes the requests data.
 */
module.exports = (db) => {
  router.get("/:id/requests", (req, res) => {
    console.log(req.params.id);
    requestsdbHelper
      .getUserRequestsById(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });
  
  // creates a new request in the database
  router.post("/:id/requests", (req, res) => {
    console.log("In request form post", req.body);
    requestsdbHelper
      .addNewRequest(db, req.body)
      .then((result) => res.send(result));
  });

  // Gets all offers for user effects
  router.get("/:id/requests/offers", (req, res) => {
    offersdbHelpers
      .getAllOffers(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // DELETE a request
  router.delete("/:id/requests/:request_id", (req, res) => {
    console.log("IN DELETE REQUEST POST");
    if (req.session && req.session.userId === parseInt(req.params.id)) {
      requestsdbHelper
        .deleteRequest(db, req.params.id)
        .then((result) => {
          console.log("THIS IS RESULT IN DELETE REQ", result);
          res.send();
        })
        .catch((err) => console.log(err));
    }
  });

  // Return user info
  router.get("/:id", (req, res) => {
    console.log(req.params.id);
    usersdbHelper
      .getUserWithId(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });
  return router;
};
