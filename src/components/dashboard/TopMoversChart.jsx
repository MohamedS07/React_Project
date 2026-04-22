import React, { useState, useEffect } from "react";
import { Typography, Box, Avatar, Stack, CircularProgress } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

import "./TopMoversChart.css";
import API_BASE_URL from "../../config";

function TopMoversChart() {
  const [movers, setMovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/stocks/top-movers`);
        const results = await response.json();
        
        if (Array.isArray(results) && results.length > 0) {
          setMovers(results);
        } else {
          setMovers([
            { symbol: 'NVDA', close: '894.52', percent_change: '+2.10' },
            { symbol: 'AAPL', close: '169.12', percent_change: '+0.54' },
            { symbol: 'MSFT', close: '421.90', percent_change: '-0.12' },
            { symbol: 'TSLA', close: '175.22', percent_change: '-1.45' },
          ]);
        }
      } catch (err) {
        console.error("Movers fetch error:", err);
        setMovers([
            { symbol: 'NVDA', close: '894.52', percent_change: '+2.10' },
            { symbol: 'AAPL', close: '169.12', percent_change: '+0.54' },
            { symbol: 'MSFT', close: '421.90', percent_change: '-0.12' },
            { symbol: 'TSLA', close: '175.22', percent_change: '-1.45' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchMovers, 2000);

    
    const interval = setInterval(fetchMovers, 60000); 
    return () => {
        clearTimeout(timer);
        clearInterval(interval);
    };
  }, []);

  if (loading) {
    return <Box className="top-movers-chart-loading"><CircularProgress size={24} color="inherit" /></Box>;
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
              className="mover-item"
            >
              <Box className="mover-info">
                <Avatar className="mover-avatar">
                  {stock.symbol?.[0]}
                </Avatar>

                <Box>
                  <Typography className="mover-symbol">{stock.symbol}</Typography>
                  <Typography variant="caption" className="mover-price">
                    ${parseFloat(stock.close).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Box className="mover-trend">
                {isUp ? (
                  <TrendingUp className={`trend-icon trend-up`} />
                ) : (
                  <TrendingDown className={`trend-icon trend-down`} />
                )}

                <Typography className={`trend-text ${isUp ? "trend-up" : "trend-down"}`}>
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
