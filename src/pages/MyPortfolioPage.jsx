import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioCharts from '../components/portfolio/PortfolioCharts';
import PortfolioStockTable from '../components/portfolio/PortfolioStockTable';

function MyPortfolioPage() {
    const [stocks, setStocks] = useState([
        { symbol: '', name: '', savedPrice: '', currentPrice: '', change: '', savedDate: '' }
    ]);

    const handleRemove = (symbol) => {
        setStocks(stocks.filter(stock => stock.symbol !== symbol));
    };

    return (
        <Box sx={{ p: 3, bgcolor: 'var(--bg-main)', minHeight: '100vh' }}>

            <Container maxWidth="xl" sx={{ mt: 2, px: '0 !important' }}>
                <PortfolioHero />
                
                <Box sx={{ mt: 5 }}>
                    <PortfolioStockTable stocks={stocks} onRemove={handleRemove} />
                </Box>

                <Box sx={{ mt: 5 }}>
                    <PortfolioCharts />
                </Box>
            </Container>
        </Box>
    );
}

export default MyPortfolioPage;
