import React from 'react';
import { Grid, Card, Box, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

function PortfolioCharts() {
    const chartOptions = {
        labels: ['', '', '', '', ''],
        colors: ['#059669', '#10b981', '#34d399', '#6ee7b7', '#dcfce7'], // Green Shades (Emerald palette)
        chart: {
            type: 'donut',
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            labels: {
                colors: '#64748b'
            },
            markers: {
                radius: 12,
                size: 6
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total Value',
                            formatter: () => '$',
                            style: {
                                fontSize: '14px',
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                color: '#64748b'
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontWeight: 800,
                            fontFamily: 'Poppins, sans-serif',
                            color: '#1e293b',
                            offsetY: 5
                        }
                    }
                }
            }
        },
        tooltip: {
            enabled: true,
            theme: 'light'
        }
    };

    const chartSeries = [];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card sx={{ 
                    borderRadius: '24px', 
                    border: '1px solid var(--border-light)', 
                    boxShadow: '0 4px 6px -1px var(--neutral-100)', 
                    p: 4, 
                    height: '450px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    bgcolor: 'white'
                }}>
                    <Typography variant="h6" fontWeight="800" sx={{ mb: 0.5, color: 'var(--text-primary)' }}>Asset Allocation</Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'var(--text-secondary)' }}>Distribution across holdings</Typography>
                    
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="donut"
                            width="100%"
                        />
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}

export default PortfolioCharts;
