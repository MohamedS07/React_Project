import { Card, Typography } from "@mui/material";
import MarketTrendChart from "./MarketTrendChart";
import "./MarketTrendBox.css";

function MarketTrendBox() {
    return (
        <Card className="market-trend-card">
            <Typography variant="h6" className="market-trend-title">
                Market Trend
            </Typography>
            <MarketTrendChart />
        </Card>
    );
}

export default MarketTrendBox;
