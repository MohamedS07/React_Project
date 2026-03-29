import React from "react";
import { Box, Typography } from "@mui/material";

function AIChatMessage({ type, text }) {

  const isUser = type === "user";

  return (
    <Box
      sx={{
        maxWidth: "80%",
        alignSelf: isUser ? "flex-end" : "flex-start",
        bgcolor: isUser ? "var(--primary-600)" : "white",
        color: isUser ? "white" : "var(--text-primary)",
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        border: !isUser ? '1px solid var(--border-light)' : 'none',
        p: 2,
        px: 2.5,
        borderRadius: isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
        transition: 'all 0.2s',
      }}
    >
      <Typography variant="body2" sx={{ lineHeight: 1.6, fontWeight: isUser ? 500 : 400 }}>
        {text}
      </Typography>
    </Box>
  );
}

export default AIChatMessage;