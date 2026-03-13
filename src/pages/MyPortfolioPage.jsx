import React from 'react';
import { Box, Container } from '@mui/material';
import SearchBar from '../components/dashboard/SearchBar';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioCharts from '../components/portfolio/PortfolioCharts';

function MyPortfolioPage() {
    return (
        <Box sx={{ p: 3 }}>
            <SearchBar />

            <Container maxWidth="xl" sx={{ mt: 2 }}>
                <PortfolioHero />
                <PortfolioCharts />

                <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                    <div style={{ width: '300px', height: '12px', background: '#f8fafc', borderRadius: '4px', margin: '0 auto' }}></div>
                </Box>
            </Container>
        </Box>
    );
}

export default MyPortfolioPage;
