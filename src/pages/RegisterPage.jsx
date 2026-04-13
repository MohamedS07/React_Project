import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import BackgroundVideo from "../components/Background/BackgroundVideo";
import RegisterCard from "../components/register/RegisterCard";
import "../pages/LoginPage.css";

function RegisterPage() {
  return (
    <BackgroundVideo>
      <Box className="login-page-video-overlay">
        <Container maxWidth="xs" className="login-page-container">
          <RegisterCard />
        </Container>
      </Box>
    </BackgroundVideo>
  );
}

export default RegisterPage;