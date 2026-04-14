import { Grid, Box, Typography } from "@mui/material";
import { TrendingUp, TrendingDown, Equalizer, Assessment } from "@mui/icons-material";
import "./StockStatsGrid.css";

const StockStatsGrid = ({ data }) => {
    const stats = [
        { label: 'DAY HIGH', value: `$${parseFloat(data.high).toFixed(2)}`, icon: <TrendingUp className="stat-icon-small" /> },
        { label: 'DAY LOW', value: `$${parseFloat(data.low).toFixed(2)}`, icon: <TrendingDown className="stat-icon-small" /> },
        { label: 'VOLUME', value: parseInt(data.volume).toLocaleString(), icon: <Equalizer className="stat-icon-small" /> },
        { label: 'OPEN', value: `$${parseFloat(data.open).toFixed(2)}`, icon: <Assessment className="stat-icon-small" /> },
    ];

    return (
        <Grid container spacing={2} className="stock-stats-grid-container">
            {stats.map((stat, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                    <Box className="stat-box">
                        <Box className="stat-header">
                            {stat.icon}
                            <Typography variant="caption" className="stat-label-text">
                                {stat.label}
                            </Typography>
                        </Box>
                        <Typography variant="h6" className="stat-value-text">
                            {stat.value}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default StockStatsGrid;
