import { Card, Box, Typography } from "@mui/material";
import "./DashboardSummary.css";

function DashboardSummary({ title, value, icon, trend, isSimulated }) {
  const isTrendUp = trend?.startsWith('+');

  return (
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
          {title} {isSimulated && <span style={{fontSize: '10px', opacity: 0.7}}>(Simulated)</span>}
        </Typography>
        <Typography variant="h5" className="summary-value">
          {value}
        </Typography>
      </div>
    </Card>
  );
};

export default DashboardSummary;