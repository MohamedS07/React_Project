import "./MarketTrendChart.css";

function MarketTrendChart() {
  const [series, setSeries] = useState([{ data: [] }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/stocks/time-series/SPY?interval=1day&outputsize=30`);
        const result = await response.json();
        
        if (result.values) {
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
        }
      } catch (err) {
        console.error("Trend chart error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrend();
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