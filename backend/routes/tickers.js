const express = require("express");
const router = express.Router();
const {
  fetchAndStoreTickers,
  getStoredTickers,
} = require("../controllers/tickersController");

// router.get("/fetch-and-store", fetchAndStoreTickers);

router.get("/get-tickers", getStoredTickers);

module.exports = router;
