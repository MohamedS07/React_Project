import "./SearchStocksPage.css";
import { useState } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";
import SearchHero from "../components/search/SearchHero";
import StockOverview from "../components/search/StockOverview";
import PriceTrendLarge from "../components/search/PriceTrendLarge";
import API_BASE_URL from "../config";



function SearchStocksPage() {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!symbol) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/stocks/quote/${encodeURIComponent(symbol.trim())}`);
      const data = await response.json();
      if (response.ok) {
        setStockData(data);
      } else {
        setError(data.message || "Failed to fetch stock data");
      }
    } catch (err) {
      setError("Network or CORS error. Please restart your server on port 4000 and check the console.");
      console.error("Search Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="search-page-container">
      <SearchHero 
        symbol={symbol} 
        setSymbol={setSymbol} 
        onSearch={handleSearch} 
        loading={loading}
      />
      
      {error && <Alert severity="error" className="search-error-alert">{error}</Alert>}
      
      {loading && (
        <Box className="search-loading-box">
          <CircularProgress color="inherit" />
        </Box>
      )}

      {stockData && !loading && (
        <>
          <StockOverview data={stockData} />
          <PriceTrendLarge symbol={stockData.symbol} />
        </>
      )}
    </Box>
  );
}

export default SearchStocksPage;