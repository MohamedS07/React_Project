import React from "react";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import BackgroundVideo from "../components/Background/BackgroundVideo";
import LoginCard from "../components/login/LoginCard";

function LoginPage() {
  return (
    <BackgroundVideo>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xs" sx={{ transition: 'all 0.5s ease' }}>
          <LoginCard />
        </Container>
      </Box>
    </BackgroundVideo>
  );
}

export default LoginPage;