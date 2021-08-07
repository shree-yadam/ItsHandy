const express = require("express");
const router = express.Router();
const requestsdbHelper = require("../db/queries/requestsdbHelper");
const offersdbHelpers = require("../db/queries/offersdbHelper");
const usersdbHelper = require("../db/queries/usersdbHelper");
const reviewsDbHelper = require("../db/queries/reviewsDbHelper");

/**
 * Get requests from the database given their id.
 * @param {String} id The id of the customer.
 * @return {Promise<{}>} A promise that includes the requests data.
 */
module.exports = (db) => {
  // Gets all offers for user effects
  router.get("/:id/requests/offers", (req, res) => {
    offersdbHelpers
      .getAllOffers(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  router.get(`/:client_id/reviews`, (req, res) => {
    console.log("GET REVIEWS");
    reviewsDbHelper
      .getReviewByClientId(db, req.params.request_id)
      .then((data) => {
        //console.log(data);
        res.send(data);
      })
      .catch((err) => console.log(err));
  });

  router.get("/:id/requests", (req, res) => {
    console.log(req.params.id);
    requestsdbHelper
      .getUserRequestsById(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });

  // Get client information
  router.get("/:id", (req, res) => {
    console.log(req.params.id);
    usersdbHelper
      .getUserWithId(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });

  // creates a new review for a request in the database
  router.post("/:id/requests/:request_id/reviews", (req, res) => {
    console.log("In request form post review", req.body);
    reviewsDbHelper
      .addReviewForRequest(
        db,
        req.params.id,
        req.body.provider_id,
        req.params.request_id,
        req.body.rating
      )
      .then((data) => {
        return usersdbHelper.updateAverageRatingForID(db, req.body.provider_id);
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(401).send());
  });

  // creates a new request in the database
  router.post("/:id/requests", (req, res) => {
    console.log("In request form post new", req.body);
    requestsdbHelper
      .addNewRequest(db, req.body)
      .then((result) => res.send(result));
  });

  // DELETE a request
  router.delete("/:id/requests/:request_id", (req, res) => {
    console.log("IN DELETE REQUEST POST");
    if (req.session && req.session.userId === parseInt(req.params.id)) {
      requestsdbHelper
        .deleteRequest(db, req.params.id)
        .then((result) => {
          //console.log("THIS IS RESULT IN DELETE REQ", result);
          res.send();
        })
        .catch((err) => console.log(err));
    }
  });

  // Assign a request to a service provider
  router.post("/:id/requests/:request_id/offers/assign", (req, res) => {
    //console.log(`req.se`, req.params.request_id)
    console.log("Line63", req.body.price);
    console.log("Line63", req.body.price);
    // if (
    //   req.session &&
    //   req.session.userId === parseInt(req.params.id) &&
    //   req.params.request_id
    // ) {

    // }
    requestsdbHelper
      .acceptOffer(
        db,
        req.body.provider_id,
        req.body.price,
        req.params.id,
        req.params.request_id
      )
      .then((response) => {
        //console.log("route was successful ");
        return res.send(200);
      })
      .catch((err) => console.log(res.status(500).send(), err.message));
  });

  // Return user info
  router.get("/:id", (req, res) => {
    //console.log(req.params.id);
    usersdbHelper
      .getUserWithId(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });
  // updates request with completed date
  router.put("/:id/requests/:request_id/update_date_completed", (req, res) => {
    console.log("In request form post update", req.body);
    requestsdbHelper
      .updateAssignedJob(db, req.params.request_id, req.body.date)
      .then((result) => res.send(result))
      .catch((err) => res.status(401).send());
  });

  // Edit request
  router.put("/:id/requests/:request_id", (req, res) => {
    console.log("In request form edit", req.body);
    requestsdbHelper
      .deleteRequest(db, req.params.request_id)
      .then((data) => requestsdbHelper.addNewRequest(db, req.body))
      .then((result) => {
        console.log("Updated: ", result);
        res.send(result);
      })
      .catch((err) => {
        res.status(401).send();
        console.log(err);
      });
  });
  return router;
};

// requestDetails.title,
// requestDetails.street_address,
// requestDetails.city,
// requestDetails.category_id,
// requestDetails.preferred_date === "" ? null : requestDetails.preferred_date,
// requestDetails.description,
// requestDetails.client_id,
// requestDetails.img_url,
