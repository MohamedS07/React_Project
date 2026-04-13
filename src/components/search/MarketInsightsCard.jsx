import "./MarketInsightsCard.css";

const MarketInsightsCard = ({ data }) => {
    if (!data) return null;

    const insights = [
        { label: '52W High', value: `$${parseFloat(data.fifty_two_week?.high || 0).toFixed(2)}` },
        { label: '52W Low', value: `$${parseFloat(data.fifty_two_week?.low || 0).toFixed(2)}` },
        { label: '52W Change', value: `${data.fifty_two_week?.range || 'N/A'}` },
        { label: 'Volume', value: parseInt(data.volume || 0).toLocaleString() },
    ];

    return (
        <Card className="insights-card">
            <Box className="insights-header">
                <AccessTime className="insights-header-icon" />
                <Box>
                    <Typography variant="h6" className="insights-title">
                        Market Insights
                    </Typography>
                    <Typography variant="caption" className="insights-subtitle">
                        Key performance metrics
                    </Typography>
                </Box>
            </Box>
            <Stack spacing={2.5} className="insights-stack">
                {insights.map((item, idx) => (
                    <Box key={idx} className="insight-row">
                        <Box className="insight-label-container">
                            <Typography variant="body2" className="insight-label">
                                {item.label}
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="insight-value">
                            {item.value}
                        </Typography>
                    </Box>
                ))}
            </Stack>
            <Card className="info-box-card">
                <Box className="info-box-header">
                    <TrendingUp className="info-box-icon" />
                    <Typography variant="body2" className="info-box-title">
                        Exchange Info
                    </Typography>
                </Box>
                <Typography variant="caption" className="info-box-content">
                    Listing: {data.exchange}<br/>
                    Currency: {data.currency}
                </Typography>
            </Card>
        </Card>
    );
};

export default MarketInsightsCard;
