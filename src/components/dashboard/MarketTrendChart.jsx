import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Chart from "react-apexcharts";
import API_BASE_URL from "../../config";

function MarketTrendChart() {
  const [series, setSeries] = useState([{ data: [] }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const symbol = 'SPY';
        const response = await fetch(`${API_BASE_URL}/api/stocks/time-series/${symbol}?interval=5min&outputsize=78`);
        const result = await response.json();
        
        if (result && result.values) {
          const formattedData = result.values.map(item => ({
            x: new Date(item.datetime),
            y: [
              parseFloat(item.open),
              parseFloat(item.high),
              parseFloat(item.low),
              parseFloat(item.close)
            ]
          })).reverse();

          setSeries([{ data: formattedData }]);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        const mockData = Array.from({ length: 40 }, (_, i) => {
            const date = new Date();
            date.setMinutes(date.getMinutes() - (40 - i) * 5); // 5-minute steps
            const base = 512 + Math.random() * 5;
            return {
                x: date,
                y: [base, base + 2, base - 2, base + 1]
            };
        });
        setSeries([{ data: mockData }]);
      } finally {
        setLoading(false);
      }
    };
    
    const timer = setTimeout(fetchTrend, 4000);

    const interval = setInterval(fetchTrend, 60000);
    return () => {
        clearTimeout(timer);
        clearInterval(interval);
    };
  }, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: { show: false }
    },
    xaxis: {
      type: "datetime",
      labels: { style: { colors: '#94a3b8' } }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: '#94a3b8' } }
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e',
          downward: '#ef4444'
        }
      }
    }
  };

  if (loading) {
    return (
      <Box className="market-trend-chart-loading">
        <CircularProgress size={24} color="inherit" />
      </Box>
    );
  }

  return (
    <Box className="market-trend-chart-wrapper">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={320}
      />
    </Box>
  );
}

export default MarketTrendChart;