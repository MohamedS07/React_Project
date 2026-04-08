import React from 'react';
import { Card, Box, Typography, Stack } from '@mui/material';
import { AccessTime, InfoOutlined, TrendingUp } from '@mui/icons-material';

const MarketInsightsCard = ({ data }) => {
    if (!data) return null;

    const insights = [
        { label: '52W High', value: `$${parseFloat(data.fifty_two_week?.high || 0).toFixed(2)}` },
        { label: '52W Low', value: `$${parseFloat(data.fifty_two_week?.low || 0).toFixed(2)}` },
        { label: '52W Change', value: `${data.fifty_two_week?.range || 'N/A'}` },
        { label: 'Volume', value: parseInt(data.volume || 0).toLocaleString() },
    ];

    return (
        <Card sx={{ 
            borderRadius: '24px', 
            border: '1px solid var(--neutral-200)', 
            p: 4, 
            height: '100%',
            bgcolor: 'white'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <AccessTime sx={{ color: 'var(--neutral-900)' }} />
                <Box>
                    <Typography variant="h6" fontWeight="800" sx={{ color: 'var(--neutral-900)', lineHeight: 1 }}>
                        Market Insights
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--neutral-400)', fontWeight: 600 }}>
                        Key performance metrics
                    </Typography>
                </Box>
            </Box>
            <Stack spacing={2.5} sx={{ mb: 4 }}>
                {insights.map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" fontWeight="600" sx={{ color: 'var(--neutral-600)' }}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Typography variant="body2" fontWeight="800" sx={{ color: 'var(--neutral-900)' }}>
                            {item.value}
                        </Typography>
                    </Box>
                ))}
            </Stack>
            <Card sx={{ 
                bgcolor: 'var(--neutral-50)', 
                border: '1px solid var(--neutral-100)', 
                borderRadius: '16px', 
                p: 2.5,
                boxShadow: 'none'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5}}>
                    <TrendingUp sx={{ color: 'var(--primary-600)', fontSize: 20 }} />
                    <Typography variant="body2" fontWeight="800" sx={{ color: 'var(--neutral-900)' }}>
                        Exchange Info
                    </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'var(--neutral-500)', fontWeight: 600, display: 'block', lineHeight: 1.5 }}>
                    Listing: {data.exchange}<br/>
                    Currency: {data.currency}
                </Typography>
            </Card>
        </Card>
    );
};

export default MarketInsightsCard;
