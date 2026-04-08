import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown, Equalizer, Assessment } from '@mui/icons-material';

const StockStatsGrid = ({ data }) => {
    const stats = [
        { label: 'DAY HIGH', value: `$${parseFloat(data.high).toFixed(2)}`, icon: <TrendingUp sx={{ fontSize: 16, color: 'var(--neutral-400)' }} /> },
        { label: 'DAY LOW', value: `$${parseFloat(data.low).toFixed(2)}`, icon: <TrendingDown sx={{ fontSize: 16, color: 'var(--neutral-400)' }} /> },
        { label: 'VOLUME', value: parseInt(data.volume).toLocaleString(), icon: <Equalizer sx={{ fontSize: 16, color: 'var(--neutral-400)' }} /> },
        { label: 'OPEN', value: `$${parseFloat(data.open).toFixed(2)}`, icon: <Assessment sx={{ fontSize: 16, color: 'var(--neutral-400)' }} /> },
    ];

    return (
        <Grid container spacing={2} sx={{ mb: 4 }}>
            {stats.map((stat, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                    <Box sx={{ p: 2, borderRadius: '16px', border: '1px solid var(--neutral-100)', bgcolor: 'var(--neutral-50)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            {stat.icon}
                            <Typography variant="caption" fontWeight="800" sx={{ color: 'var(--neutral-500)', letterSpacing: '0.05em' }}>
                                {stat.label}
                            </Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="800" sx={{ color: 'var(--neutral-900)' }}>
                            {stat.value}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default StockStatsGrid;
