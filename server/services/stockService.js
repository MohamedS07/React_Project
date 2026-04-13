const axios = require('axios');

class StockService {
    constructor() {
        this.apiKey = process.env.TWELVE_DATA_API_KEY;
        this.baseUrl = 'https://api.twelvedata.com';
        
        if (!this.apiKey) {
            console.warn('Warning: TWELVE_DATA_API_KEY is not defined in environment variables.');
        }
    }

 
    async getQuote(symbol) {
        try {
            const response = await axios.get(`${this.baseUrl}/quote`, {
                params: {
                    symbol: symbol,
                    apikey: this.apiKey
                }
            });

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            return response.data;
        } catch (error) {
            this._handleError(error, `Fetching quote for ${symbol}`);
        }
    }

    async getTimeSeries(symbol, interval = '1day') {
        try {
            const response = await axios.get(`${this.baseUrl}/time_series`, {
                params: {
                    symbol: symbol,
                    interval: interval,
                    apikey: this.apiKey
                }
            });

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            return response.data;
        } catch (error) {
            this._handleError(error, `Fetching time series for ${symbol}`);
        }
    }

    _handleError(error, context) {
        if (error.response) {
            console.error(`${context} Failed [Status ${error.response.status}]:`, error.response.data);
            throw new Error(error.response.data.message || 'API Error');
        } else if (error.request) {
            console.error(`${context} Failed: No response received from server.`);
            throw new Error('Network Error: No response from stock API');
        } else {
            console.error(`${context} Error:`, error.message);
            throw error;
        }
    }
}

module.exports = new StockService();
