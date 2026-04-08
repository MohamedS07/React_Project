import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import BackgroundVideo from "../components/Background/BackgroundVideo";
import RegisterCard from "../components/register/RegisterCard";

function RegisterPage() {
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
          <RegisterCard />
        </Container>
      </Box>
    </BackgroundVideo>
  );
}

export default RegisterPage;