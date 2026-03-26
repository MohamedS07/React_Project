import React from "react";
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import BackgroundVideo from "../components/Background/BackgroundVideo"; 

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
        <Container maxWidth="sm">
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 5,
              p: 2,
              background: "rgba(255,255,255,0.85)", // semi-transparent
            }}
          >
            <CardContent>
              <Box textAlign="center" mb={3}>
                <Typography variant="h5" fontWeight="bold">
                  Login
                </Typography>
              </Box>

              <Stack spacing={2} mt={2}>
                <TextField label="Email Address" fullWidth type="email" />
                <TextField label="Password" fullWidth type="password" />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 1,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </Stack>

              <Box textAlign="center" mt={3}>
                <Typography variant="body2">
                  Don't have an account? <Link to="/register">Register</Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </BackgroundVideo>
  );
}

export default LoginPage;