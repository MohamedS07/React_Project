import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

function PortfolioHero() {
    return (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
                <Typography variant="h4" fontWeight="700" sx={{ color: '#1e293b' }}>
                    My Portfolio
                </Typography>
                
            </Box>

            
        </Box>
    );
}

export default PortfolioHero;
