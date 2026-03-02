import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Container,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  Lock,
  Email,
  Person,
  Security,
} from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f5f7fa, #e4ecf7)",
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
          }}
        >
          <CardContent>
            <Box textAlign="center" mb={3}>
              <Typography variant="h5" fontWeight="bold">
                Register
              </Typography>
            </Box>

            <Stack spacing={2} mt={2}>
              <TextField
                label="Full Name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Email Address"
                fullWidth
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

             
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
                Create Account →
              </Button>
            </Stack>

            <Box my={3}></Box>

            

            <Box textAlign="center" mt={4}></Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;
