import React, { useState, useEffect } from "react";
import { Typography, Box, Avatar, Stack, CircularProgress } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

function TopMoversChart() {
  const [movers, setMovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovers = async () => {
      try {
        const symbols = 'TSLA,NVDA,AAPL,MSFT,AMZN,GOOGL';
        const response = await fetch(`http://localhost:5000/api/stocks/quote/${symbols}`);
        const data = await response.json();
        
        // Convert batch object to array and filter out errors
        const results = Object.values(data).filter(item => item && !item.message && item.symbol);
        
        if (results.length > 0) {
          setMovers(results);
        } else {
          // Fallback static data if API limit is hit
          setMovers([
            { symbol: 'TSLA', close: '175.22', percent_change: '-1.45' },
            { symbol: 'NVDA', close: '894.52', percent_change: '+2.10' },
            { symbol: 'AAPL', close: '169.12', percent_change: '+0.54' },
            { symbol: 'MSFT', close: '421.90', percent_change: '-0.12' },
          ]);
        }
      } catch (err) {
        console.error("Movers fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovers();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress size={24} color="inherit" /></Box>;
  }

  return (
    <>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Common high-volume assets
      </Typography>

      <Stack spacing={2}>
        {movers.map((stock, index) => {
          const isUp = parseFloat(stock.percent_change) >= 0;
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1.5,
                borderRadius: 2,
                border: "1px solid #eee"
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'var(--neutral-100)', color: 'black', fontSize: '0.8rem', fontWeight: 700 }}>
                  {stock.symbol?.[0]}
                </Avatar>

                <Box>
                  <Typography fontWeight={600}>{stock.symbol}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    ${parseFloat(stock.close).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={0.5}>
                {isUp ? (
                  <TrendingUp sx={{ color: "green", fontSize: 18 }} />
                ) : (
                  <TrendingDown sx={{ color: "red", fontSize: 18 }} />
                )}

                <Typography fontWeight={600} color={isUp ? "green" : "red"}>
                  {parseFloat(stock.percent_change).toFixed(2)}%
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default TopMoversChart;