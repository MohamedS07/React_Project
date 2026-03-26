import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

function AIInputBox() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        mt: 4
      }}
    >
      <TextField
        fullWidth
        placeholder="Ask anything about stocks, risk, or your portfolio..."
      />

      <IconButton color="primary">
        <Send />
      </IconButton>

    </Box>
  );
}

export default AIInputBox;