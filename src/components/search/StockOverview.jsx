import React from 'react';
import { Grid } from '@mui/material';
import StockMainCard from './StockMainCard';
import MarketInsightsCard from './MarketInsightsCard';

function StockOverview({ data }) {
    return (
        <Grid container spacing={4} sx={{ mb: 6 }}>
            
            <Grid item xs={12} lg={8}>
                <StockMainCard data={data} />
            </Grid>

            
            <Grid item xs={12} lg={4}>
                <MarketInsightsCard data={data} />
            </Grid>
        </Grid>
    );
}

export default StockOverview;
