import React from 'react';
import { Grid, Card, Box, Typography } from '@mui/material';

function PortfolioCharts() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <Card sx={{ borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: 'none', p: 3, height: '400px', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Box>
                            <Typography variant="h6" fontWeight="700">Portfolio Growth</Typography>
                            
                        </Box>
                       
                    </Box>
                </Card>
            </Grid>

            
            <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: 'none', p: 3, height: '400px', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" fontWeight="700" sx={{ mb: 1 }}>Asset Allocation</Typography>
                    

                    

                    
                </Card>
            </Grid>
        </Grid>
    );
}

export default PortfolioCharts;
