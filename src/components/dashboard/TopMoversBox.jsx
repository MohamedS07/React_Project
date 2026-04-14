import { Card, Typography } from "@mui/material";
import TopMoversChart from "./TopMoversChart";
import "./TopMoversBox.css";

function TopMoversBox() {
  return (
    <Card className="top-movers-card">
      <Typography variant="h6" className="top-movers-title">
        Top Movers
      </Typography>

      <TopMoversChart />
    </Card>
  );
}

export default TopMoversBox;