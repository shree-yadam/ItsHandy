const express = require("express");
const router = express.Router();
const providersDbHelper = require("../db/queries/providersDbHelper");
const offersDbHelper = require("../db/queries/offersdbHelper");
const usersDbHelper = require("../db/queries/usersdbHelper")
const e = require("express");

module.exports = (db) => {
/*for provider */
    /* GET provider users */
    router.get("/:id", function (req, res) {
      if(req.session && req.session.userId === parseInt(req.params.id)) {
        usersDbHelper.getProviderByTruthiness(db, req.params.id)
          .then((result) => {
            res.json(result)})
          .catch((err) => {
            console.log(err);
            res.status(500).send();
          });
      } else {
        res.status(401).send();
      }
    });

  /* GET open listings based on category of provider */
  router.get("/:id/newListings", function (req, res) {
    if(req.session && req.session.userId === parseInt(req.params.id)) {
      providersDbHelper.getNewListingByCategory(db, req.params.id)
        .then((result) => {
          res.json(result)})
        .catch((err) => {
          console.log(err);
          res.status(500).send();
        });
    } else {
      res.status(401).send();
    }
  });

  /* GET unfinished assigned jobs for provider */
  router.get("/:id/assignedJobs", function (req, res) {
    console.log("route:get assigned jobs");
    if(req.session && req.session.userId === parseInt(req.params.id)) {
      providersDbHelper.getUnfinishedAssignedJobs(db, req.params.id)
        .then((result) => {
          console.log(result);
          res.json(result)})
        .catch((err) => {
          console.log(err);
          res.status(500).send();
        });
    } else {
      res.status(401).send();
    }
  });

  /* Add an offer */
  router.post("/:id/offer", function (req, res) {
    console.log(req.params.id);
    console.log("Offer received", req.body);
    if(req.session && req.session.userId === parseInt(req.params.id)) {
      const provider_id = req.session.userId;
      const {request_id, quote, comment } = req.body;
      offersDbHelper.getFirstOfferByRequestIdAndProviderId(db, request_id, provider_id)
      .then((data) => {
        if (data) {
          console.log("Already exists", data);
          res.status(400).send();
          return;
        }
        offersDbHelper.addOfferForRequestByProvider(db, request_id, provider_id, quote, comment)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send();
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send();
      });
    } else {
      res.status(401).send();
    }
  });

  /* Mark Assigned job as completed, respond with update list of assigned jobs */
  router.put("/:id/assignedJobs/:jobId/update", function (req, res) {
    console.log("Marking job as completed");
    if(req.session && req.session.userId === parseInt(req.params.id)) {
      providersDbHelper.updateAssignedJob(db, req.params.jobId, req.body.date)
        .then((result) => {
          console.log("TEST!!: ", result);
          res.status(204).json({});
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send();
        });
    } else {
      res.status(401).send();
    }
  });

  return router;
};
