import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, Button, Stack, CircularProgress } from '@mui/material';
import Chart from 'react-apexcharts';

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
                const response = await fetch(`http://localhost:5000/api/stocks/time-series/${symbol}?interval=${interval}&outputsize=${outputsize}`);
                const result = await response.json();
                if (result.values) {
                    setData(result.values.reverse());
                }
            } catch (err) {
                console.error("Error fetching trend data:", err);
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
        <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 3 }}>
                <Box>
                    <Typography variant="h5" fontWeight="800" sx={{ color: 'var(--neutral-900)' }}>
                        Price Trend: {symbol}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--neutral-500)', mt: 0.5 }}>
                        Visualizing the historical price movement of {symbol}.
                    </Typography>
                </Box>
                
                <Stack direction="row" spacing={0.5} sx={{ bgcolor: 'var(--neutral-100)', p: 0.5, borderRadius: '12px' }}>
                    {['1D', '1W', '1M', '1Y', 'ALL'].map((tf) => (
                        <Button
                            key={tf}
                            onClick={() => setTimeframe(tf)}
                            size="small"
                            sx={{
                                minWidth: '44px',
                                borderRadius: '10px',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                color: timeframe === tf ? 'var(--neutral-900)' : 'var(--neutral-400)',
                                bgcolor: timeframe === tf ? 'white' : 'transparent',
                                boxShadow: timeframe === tf ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                '&:hover': { bgcolor: timeframe === tf ? 'white' : 'rgba(0,0,0,0.05)' }
                            }}
                        >
                            {tf}
                        </Button>
                    ))}
                </Stack>
            </Box>

            <Card sx={{
                borderRadius: '24px',
                border: '1px solid var(--neutral-200)',
                bgcolor: 'white',
                boxShadow: 'none',
                height: '500px', // Fixed height for consistency
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                {loading ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                        <CircularProgress color="inherit" />
                    </Box>
                ) : (
                    <Box sx={{ p: 1, width: '100%', height: '100%' }}>
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

