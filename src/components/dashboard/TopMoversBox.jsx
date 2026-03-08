import React from 'react';
import { Card, Box, Typography } from '@mui/material';

function TopMoversBox() {
    return (
        <Card sx={{
            borderRadius: '16px',
            minHeight: 360,
            width: 330,
            p: 3,
            boxShadow: 'none',
            border: '1px solid #e2e8f0',
            bgcolor: 'white'
        }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#1e293b', mb: 2 }}>
                Top Movers
            </Typography>


        </Card>
    );
}

export default TopMoversBox;
