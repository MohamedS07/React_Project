import React from 'react';
import { Card, Box, Typography } from '@mui/material';

function PriceTrendLarge() {
    return (
        <Card sx={{
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: 'none',
            p: 4,
            mb: 3,
            minHeight: 400
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" fontWeight="700">Price Trend Performance</Typography>
                
            </Box>

            
           
        </Card>
    );
}

export default PriceTrendLarge;
