import React, { useState } from 'react';
import { Card, Box, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

function PriceTrendLarge() {
    const [chartData] = useState({
        series: [{
            name: 'Price',
            data: [
                { x: new Date(2026, 2, 20).getTime(), y: 4120 },
                { x: new Date(2026, 2, 21).getTime(), y: 4160 },
                { x: new Date(2026, 2, 22).getTime(), y: 4180 },
                { x: new Date(2026, 2, 23).getTime(), y: 4230 },
                { x: new Date(2026, 2, 24).getTime(), y: 4260 },
                { x: new Date(2026, 2, 25).getTime(), y: 4290 },
                { x: new Date(2026, 2, 26).getTime(), y: 4320 },
                { x: new Date(2026, 2, 27).getTime(), y: 4360 }
            ]
        }],
        options: {
            chart: {
                type: 'area', // Area chart looks more modern than just a line
                height: 400,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 2,
                    blur: 4,
                    opacity: 0.1,
                }
            },
            colors: ['#7c3aed'], // our --primary-600
            stroke: {
                curve: 'smooth',
                width: 3
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100]
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 4,
                colors: ['#7c3aed'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    format: 'MMM dd',
                    style: {
                        colors: '#64748b',
                        fontFamily: 'Poppins, sans-serif'
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    formatter: (val) => `$${val}`,
                    style: {
                        colors: '#64748b',
                        fontFamily: 'Poppins, sans-serif'
                    }
                }
            },
            grid: {
                borderColor: '#f1f5f9',
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            tooltip: {
                theme: 'light',
                x: {
                    format: 'dd MMM yyyy'
                }
            }
        }
    });

    return (
        <Card sx={{
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            boxShadow: '0 10px 15px -3px var(--neutral-100)',
            p: 4,
            mb: 3,
            minHeight: 450,
            bgcolor: 'white'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                    <Typography variant="h6" fontWeight="800" sx={{ color: 'var(--text-primary)' }}>Price Performance</Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>Live market data visualization</Typography>
                </Box>
            </Box>

            <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={350}
            />
        </Card>
    );
}

export default PriceTrendLarge;

