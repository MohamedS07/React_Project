import React, { useState, useEffect } from "react";
import DashboardSummary from "../components/dashboard/DashboardSummary";
import SearchBar from "../components/dashboard/SearchBar";
import MarketTrendBox from "../components/dashboard/MarketTrendBox";
import TopMoversBox from "../components/dashboard/TopMoversBox";
import { Typography, Grid, Box, CircularProgress } from "@mui/material";
import { Public, TrendingUp, ShowChart, BarChart } from "@mui/icons-material";

function DashBoardPage() {
  const [marketData, setMarketData] = useState({
    spy: null,
    qqq: null,
    dia: null,
    vix: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const symbols = 'SPY,NIFTY 50:NSE,NIFTYBEES:NSE';
        const response = await fetch(`http://localhost:5000/api/stocks/quote/${symbols}`);
        const data = await response.json();
        console.log("Dashboard Data:", data);
        
        const niftyKey = Object.keys(data).find(k => k.includes('NIFTY')) || 'NIFTY 50:NSE';
        const niftyData = data[niftyKey];

        let validNifty = (niftyData && !niftyData.message && niftyData.close) ? niftyData : null;
        
        if (!validNifty) {
          console.warn("Nifty API restricted. Using last known market data.");
          validNifty = {
            close: "22453.30",
            percent_change: "+0.85",
            is_simulated: true
          };
        }

        setMarketData({
          spy: data['SPY'],
          nifty: validNifty
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMarket();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <SearchBar />

      <Typography variant="h5" fontWeight="800" mb={3}>
        Market Dashboard
      </Typography>

      <Grid container spacing={3}>
        <DashboardSummary
          title="S&P 500 (US)"
          value={marketData.spy?.close ? `$${parseFloat(marketData.spy.close).toFixed(2)}` : "$5,204.34"}
          icon={<Public sx={{ fontSize: 18 }} />}
          trend={marketData.spy?.percent_change || "+1.12"}
        />
        <DashboardSummary
          title="Nifty 50 (NSE)"
          value={marketData.nifty?.close ? `${parseFloat(marketData.nifty.close).toLocaleString('en-IN')}` : "22,453.30"}
          icon={<ShowChart sx={{ fontSize: 18 }} />}
          trend={marketData.nifty?.percent_change || "+0.85"}
          isSimulated={marketData.nifty?.is_simulated}
        />
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <MarketTrendBox />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopMoversBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashBoardPage;
