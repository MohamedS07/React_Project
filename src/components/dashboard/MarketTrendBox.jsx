import "./MarketTrendBox.css";

function MarketTrendBox() {
    return (
        <Card className="market-trend-card">
            <Typography variant="h6" className="market-trend-title">
                Market Trend
                <MarketTrendChart/>
            </Typography>
            
        </Card>
    );
}

export default MarketTrendBox;
