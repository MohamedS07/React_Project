import React, { useState } from "react";
import { Box, Alert, CircularProgress } from "@mui/material";
import SearchHero from "../components/search/SearchHero";
import StockOverview from "../components/search/StockOverview";
import PriceTrendLarge from "../components/search/PriceTrendLarge";

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
      const response = await fetch(`http://localhost:5000/api/stocks/quote/${symbol}`);
      const data = await response.json();
      if (response.ok) {
        setStockData(data);
      } else {
        setError(data.message || "Failed to fetch stock data");
      }
    } catch (err) {
      setError("Server error. Please make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <SearchHero 
        symbol={symbol} 
        setSymbol={setSymbol} 
        onSearch={handleSearch} 
        loading={loading}
      />
      
      {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}
      
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
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