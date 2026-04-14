import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button, Card, CircularProgress } from "@mui/material";
import Chart from "react-apexcharts";
import "./PriceTrendLarge.css";

function PriceTrendLarge({ symbol }) {
    const [timeframe, setTimeframe] = useState('1M');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!symbol) return;
            setLoading(true);
            
            let interval = '1day';
            let outputsize = '30';
            
            if (timeframe === '1D') { interval = '5min'; outputsize = '78'; }
            if (timeframe === '1W') { interval = '30min'; outputsize = '100'; }
            if (timeframe === '1M') { interval = '1day'; outputsize = '30'; }
            if (timeframe === '1Y') { interval = '1week'; outputsize = '52'; }
            if (timeframe === 'ALL') { interval = '1month'; outputsize = '120'; }

            try {
                const response = await fetch(`http://localhost:4000/api/stocks/time-series/${symbol}?interval=${interval}&outputsize=${outputsize}`);
                const result = await response.json();
                if (result && result.values) {
                    setData(result.values.reverse());
                } else {
                    throw new Error("Invalid chart data");
                }
            } catch (err) {
                console.error("Error fetching trend data:", err);
                const mockData = Array.from({ length: 30 }, (_, i) => ({
                    datetime: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toISOString(),
                    close: (150 + Math.random() * 50).toString()
                }));
                setData(mockData);
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, [symbol, timeframe]);

    const chartData = {
        series: [{
            name: 'Price',
            data: data.map(item => parseFloat(item.close).toFixed(2))
        }],
        options: {
            chart: {
                type: 'area',
                height: 400,
                toolbar: { show: false },
                zoom: { enabled: false },
                fontFamily: 'Poppins, sans-serif'
            },
            colors: ['#3b82f6'],
            stroke: {
                curve: 'smooth',
                width: 3
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [0, 90, 100]
                }
            },
            dataLabels: { enabled: false },
            markers: { size: 0 },
            xaxis: {
                categories: data.map(item => timeframe === '1D' ? item.datetime.split(' ')[1] : item.datetime),
                labels: {
                    style: { colors: '#94a3b8', fontWeight: 500 }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                labels: {
                    formatter: (val) => `$${val}`,
                    style: { colors: '#94a3b8', fontWeight: 500 }
                }
            },
            grid: {
                borderColor: '#f1f5f9',
                strokeDashArray: 4,
                xaxis: { lines: { show: false } }
            },
            tooltip: {
                theme: 'light',
                x: { show: true }
            }
        }
    };

    return (
        <Box className="price-trend-wrapper">
            <Box className="price-trend-header">
                <Box>
                    <Typography variant="h5" className="price-trend-title">
                        Price Trend: {symbol}
                    </Typography>
                    <Typography variant="body2" className="price-trend-subtitle">
                        Visualizing the historical price movement of {symbol}.
                    </Typography>
                </Box>
                
                <Stack direction="row" spacing={0.5} className="timeframe-stack">
                    {['1D', '1W', '1M', '1Y', 'ALL'].map((tf) => (
                        <Button
                            key={tf}
                            onClick={() => setTimeframe(tf)}
                            size="small"
                            className={`timeframe-btn ${timeframe === tf ? 'timeframe-btn-active' : 'timeframe-btn-inactive'}`}
                        >
                            {tf}
                        </Button>
                    ))}
                </Stack>
            </Box>

            <Card className="chart-card">
                {loading ? (
                    <Box className="chart-loading-box">
                        <CircularProgress color="inherit" />
                    </Box>
                ) : (
                    <Box className="chart-container-box">
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            height="100%"
                            width="100%"
                        />
                    </Box>
                )}
            </Card>
        </Box>
    );
}

export default PriceTrendLarge;

