const stockService = require('../services/stockService');

const cache = {};
const CACHE_DURATION = 60 * 1000; 

const getStockQuote = async (req, res) => {
    const { symbol } = req.params;
    const cacheKey = `quote-${symbol}`;

    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_DURATION)) {
        console.log(`Serving from cache: ${symbol}`);
        return res.status(200).json(cache[cacheKey].data);
    }

    if (!symbol) {
        return res.status(400).json({ message: 'Stock symbol is required' });
    }

    try {
        console.log(`Fetching LIVE quote for: ${symbol}`);
        const data = await stockService.getQuote(symbol);
        
        cache[cacheKey] = {
            data: data,
            timestamp: Date.now()
        };

        res.status(200).json(data);
    } catch (error) {
        console.error('Controller Error fetching quote:', error.message);
        const status = error.message.includes('API credits') ? 429 : 500;
        res.status(status).json({ message: error.message });
    }
};

const getStockPrice = async (req, res) => {
    const { symbol } = req.params;

    try {
        console.log(`Fetching live price for: ${symbol}`);
        const data = await stockService.getQuote(symbol); // We can use quote for price too
        
        console.log(`Live price for ${symbol}: $${data.close}`);
        res.status(200).json({ price: data.close, symbol: data.symbol });
    } catch (error) {
        console.error('Controller Error fetching price:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getStockTimeSeries = async (req, res) => {
    const { symbol } = req.params;
    const { interval = '1day', outputsize = '30' } = req.query;
    const cacheKey = `history-${symbol}-${interval}-${outputsize}`;

    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_DURATION)) {
        console.log(`Serving HISTORY from cache: ${symbol}`);
        return res.status(200).json(cache[cacheKey].data);
    }

    try {
        console.log(`Fetching LIVE time series for: ${symbol} (${interval})`);
        const data = await stockService.getTimeSeries(symbol, interval);

        cache[cacheKey] = {
            data: data,
            timestamp: Date.now()
        };

        res.status(200).json(data);
    } catch (error) {
        console.error('Controller Error fetching history:', error.message);
        const status = error.message.includes('API credits') ? 429 : 500;
        res.status(status).json({ message: error.message });
    }
};

module.exports = {
    getStockQuote,
    getStockPrice,
    getStockTimeSeries
};
