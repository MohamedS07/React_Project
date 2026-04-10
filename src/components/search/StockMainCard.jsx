import React from 'react';
import { Card, Box, Typography, Button, Divider, Chip } from '@mui/material';
import { Business, TrendingUp } from '@mui/icons-material';
import StockStatsGrid from './StockStatsGrid';

const StockMainCard = ({ data }) => {
    if (!data) return null;

    const isPositive = parseFloat(data.change) >= 0;

    return (
        <Card sx={{ 
            borderRadius: '24px', 
            border: '1px solid var(--neutral-200)', 
            boxShadow: '0 4px 20px -10px rgba(0,0,0,0.1)', 
            p: 4, 
            height: '400px',
            bgcolor: 'white',
            position: 'relative'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: '16px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'black' 
                    }}>
                        <Business sx={{ fontSize: 32 }} />
                    </Box>
                    <Box>
                        <Typography variant="h5" fontWeight="800" sx={{ color: 'var(--neutral-900)', letterSpacing: '-0.5px' }}>
                            {data.name || data.symbol}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 0.5, alignItems: 'center' }}>
                            <Chip label={data.symbol} size="small" sx={{ fontWeight: 700, bgcolor: 'var(--neutral-100)', color: 'var(--neutral-700)' }} />
                            <Chip label={data.exchange} size="small" variant="outlined" sx={{ fontWeight: 600, color: 'var(--neutral-500)' }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h4" fontWeight="800" sx={{ color: 'var(--neutral-900)' }}>
                        ${parseFloat(data.close).toFixed(2)}
                    </Typography>
                    <Typography variant="body1" fontWeight="700" sx={{ color: isPositive ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                        {isPositive ? '+' : ''}{parseFloat(data.change).toFixed(2)} ({data.percent_change}%)
                    </Typography>
                </Box>
            </Box>

            <StockStatsGrid data={data} />

            <Divider sx={{ mb: 4, borderColor: 'var(--neutral-100)' }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Typography variant="body2" sx={{ color: 'var(--neutral-500)', maxWidth: '60%', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Market Status: {data.is_market_open ? 'Open' : 'Closed'}
                </Typography>
            </Box>
        </Card>
    );
};

export default StockMainCard;
