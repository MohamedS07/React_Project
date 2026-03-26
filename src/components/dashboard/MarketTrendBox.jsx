import React from 'react';
import { Card} from '@mui/material';
import { Typography } from '@mui/material';
import MarketTrendChart from './MarketTrendChart';

function MarketTrendBox() {
    return (
        <Card sx={{
            borderRadius: '16px',
            minHeight: 360,
            width: 700,
            p: 3,
            boxShadow: 'none',
            border: '1px solid #e2e8f0',
            bgcolor: 'white'
        }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#1e293b', mb: 2 }}>
                Market Trend
                <MarketTrendChart/>
            </Typography>
            
        </Card>
    );
}

export default MarketTrendBox;
