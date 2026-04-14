import { Card, Box, Typography, Chip, Divider } from "@mui/material";
import { Business } from "@mui/icons-material";
import StockStatsGrid from "./StockStatsGrid";
import "./StockMainCard.css";

const StockMainCard = ({ data }) => {
    if (!data) return null;

    const isPositive = parseFloat(data.change) >= 0;

    return (
        <Card className="stock-main-card">
            <Box className="stock-main-header">
                <Box className="stock-main-info">
                    <Box className="stock-icon-container">
                        <Business className="stock-icon-large" />
                    </Box>
                    <Box>
                        <Typography variant="h5" className="stock-title-text">
                            {data.name || data.symbol}
                        </Typography>
                        <Box className="stock-chips-container">
                            <Chip label={data.symbol} size="small" className="stock-chip-symbol" />
                            <Chip label={data.exchange} size="small" variant="outlined" className="stock-chip-exchange" />
                        </Box>
                    </Box>
                </Box>

                <Box className="stock-price-display">
                    <Typography variant="h4" className="stock-price-text">
                        ${parseFloat(data.close).toFixed(2)}
                    </Typography>
                    <Typography variant="body1" className={`stock-change-text ${isPositive ? 'change-positive' : 'change-negative'}`}>
                        {isPositive ? '+' : ''}{parseFloat(data.change).toFixed(2)} ({data.percent_change}%)
                    </Typography>
                </Box>
            </Box>

            <StockStatsGrid data={data} />

            <Divider className="stock-main-divider" />

            <Box className="stock-footer">
                <Typography variant="body2" className="stock-market-status">
                    Market Status: {data.is_market_open ? 'Open' : 'Closed'}
                </Typography>
            </Box>
        </Card>
    );
};

export default StockMainCard;
