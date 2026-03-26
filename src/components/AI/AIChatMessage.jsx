import React from "react";
import { Box, Typography } from "@mui/material";

function AIChatMessage({ type, text }) {

  const isUser = type === "user";

  return (
    <Box
      sx={{
        maxWidth: "70%",
        alignSelf: isUser ? "flex-end" : "flex-start",
        bgcolor: isUser ? "#2563eb" : "#f1f5f9",
        color: isUser ? "white" : "black",
        p: 2,
        borderRadius: 3
      }}
    >
      <Typography variant="body2">
        {text}
      </Typography>
    </Box>
  );
}

export default AIChatMessage;