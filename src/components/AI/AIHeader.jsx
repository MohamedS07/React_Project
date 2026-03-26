import React from "react";
import { Typography, Box } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";

function AIHeader() {
  return (
    <Box textAlign="center">

      <AutoAwesome sx={{ fontSize: 40, color: "#3b82f6" }} />

      <Typography variant="h5" fontWeight="bold" mt={1}>
        AI Financial Insights
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Get beginner-friendly explanations, risk assessments and diversification tips powered by AI.
      </Typography>

    </Box>
  );
}

export default AIHeader;