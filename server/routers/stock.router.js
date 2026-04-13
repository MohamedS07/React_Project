const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock.controller');


router.get('/quote/:symbol', stockController.getStockQuote);
router.get('/price/:symbol', stockController.getStockPrice);
router.get('/time-series/:symbol', stockController.getStockTimeSeries);

module.exports = router;
