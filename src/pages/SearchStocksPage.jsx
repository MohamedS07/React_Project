import "./SearchStocksPage.css";

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