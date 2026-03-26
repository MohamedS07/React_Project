import React from "react";
import { Card, Typography } from "@mui/material";
import TopMoversChart from "./TopMoversChart";

function TopMoversBox() {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        minHeight: 360,
        width: 330,
        p: 3,
        boxShadow: "none",
        border: "1px solid #e2e8f0",
        bgcolor: "white"
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: "#1e293b", mb: 2 }}
      >
        Top Movers
      </Typography>

      <TopMoversChart />
    </Card>
  );
}

export default TopMoversBox;