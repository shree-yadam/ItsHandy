const express = require("express");
const router = express.Router()
const offersdbHelpers = require("../db/queries/offersdbHelper");


module.exports = (db) => {

router.get("/requests/:id/offers", (req, res) => {
  offersdbHelpers
  .getOffersByRequestId(db, req.params.id)
  .then((result) =>  { console.log("TESTING"); res.json(result) }
)
  .catch((err) => {
    console.log(err);
  });


})
    return router;
}