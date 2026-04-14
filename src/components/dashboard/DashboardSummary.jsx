import { Grid, Card, Box, Typography } from "@mui/material";
import "./DashboardSummary.css";

function DashboardSummary({ title, value, icon, trend }) {
  const isTrendUp = trend?.startsWith('+');

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="summary-card">
        <Box className="summary-header">
          <Box className="summary-icon-box">
            {icon}
          </Box>
          <Box className={`summary-trend-box ${isTrendUp ? 'trend-up' : 'trend-down'}`}>
            {trend}
          </Box>
        </Box>

        <div>
          <Typography variant="body2" className="summary-title">
            {title}
          </Typography>
          <Typography variant="h5" className="summary-value">
            {value}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default DashboardSummary;