const express = require("express");
const router = express.Router();
const providersDbHelper = require("../db/queries/providersDbHelper");

module.exports = (db) => {

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
          console.log("!!!DATE: ", typeof(result[0].preferred_date));
          res.json(result)})
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
