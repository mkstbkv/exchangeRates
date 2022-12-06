const express = require('express');
const router = express.Router();
const currencyController = require("../controllers/currencyController");

router.get("/all", currencyController.getAllCurrency);
router.post("/filter", currencyController.getAllByFilterQuery);

module.exports = router;
