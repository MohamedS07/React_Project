import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import SideBar from '../components/dashboard/Sidebar';
import SearchBar from '../components/dashboard/SearchBar';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioCharts from '../components/portfolio/PortfolioCharts';

function MyPortfolioPage() {
    return (
        <Box sx={{ display: 'flex', bgcolor: '#fdfdff', minHeight: '100vh' }}>
            <SideBar />

            <Box sx={{
                flexGrow: 1,
                width: 'calc(100% - 240px)',
                overflow: 'hidden'
            }}>
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
            </Box>
        </Box>
    );
}

export default MyPortfolioPage;
