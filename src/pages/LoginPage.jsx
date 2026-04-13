import React from "react";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
import BackgroundVideo from "../components/Background/BackgroundVideo";
import LoginCard from "../components/login/LoginCard";
import "./LoginPage.css";

function LoginPage() {
  return (
    <BackgroundVideo>
      <Box className="login-page-video-overlay">
        <Container maxWidth="xs" className="login-page-container">
          <LoginCard />
        </Container>
      </Box>
    </BackgroundVideo>
  );
}

export default LoginPage;