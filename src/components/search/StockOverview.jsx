import React from 'react';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function StockOverview() {
    return (
        <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
                <Card sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: 'none', p: 4, height: 300,width:500 }}>    
                </Card>
            </Grid>

        </Grid>
    );
}

export default StockOverview;
