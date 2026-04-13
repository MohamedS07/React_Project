import express from 'express';
const router = express.Router();
import stockController from '../controllers/stock.controller.js';

router.get('/quote/:symbol', stockController.getStockQuote);
router.get('/price/:symbol', stockController.getStockPrice);
router.get('/time-series/:symbol', stockController.getStockTimeSeries);

export default router;
