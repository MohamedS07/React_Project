import React from 'react';
import { Card, Box, Typography, Button, Divider, Chip } from '@mui/material';
import { Business, TrendingUp, Add } from '@mui/icons-material';
import StockStatsGrid from './StockStatsGrid';

const StockMainCard = ({ data }) => {
    if (!data) return null;

    const handleAddToWatchlist = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('⚠️ Please Login first to add stocks to your Watchlist!');
            return;
        }

        const currentPrice = parseFloat(data.price || data.close || 0);
        const payload = {
            symbol: data.symbol,
            name: data.name || data.symbol,
            exchange: data.exchange || 'N/A',
            savedPrice: currentPrice,
            currentPrice: currentPrice,
            change: data.change || '0.00',
            percentChange: data.percent_change || '0%'
        };

        console.log('📌 Adding to watchlist:', payload);

        try {
            const response = await fetch('http://localhost:5000/api/watchlist/add', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            console.log('📬 Watchlist response:', result);

            if (response.ok) {
                alert(`✅ ${data.symbol} added to your Watchlist!`);
            } else {
                alert(`❌ ${result.message || 'Could not add to watchlist'}`);
            }
        } catch (err) {
            console.error('Watchlist error:', err);
            alert('❌ Failed to connect to server. Is your backend running?');
        }
    };

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
                <Button 
                    variant="contained" 
                    startIcon={<Add />}
                    onClick={handleAddToWatchlist}
                    sx={{ 
                        bgcolor: 'black', 
                        borderRadius: '12px', 
                        px: 4, 
                        py: 1.5,
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': { bgcolor: 'var(--neutral-800)' }
                    }}
                >
                    Add to Watchlist
                </Button>
            </Box>
        </Card>
    );
};

export default StockMainCard;
