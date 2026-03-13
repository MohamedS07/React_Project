import React from "react";
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";


function LoginPage() {


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
                Login
              </Typography>
            </Box>

            <Stack spacing={2} mt={2}>


              <TextField
                label="Email Address"
                fullWidth
                type="email"

              />

              <TextField
                label="Password"
                fullWidth
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
                Login →
              </Button>
            </Stack>

            <Box my={3}></Box>



            <Box textAlign="center" mt={4}></Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default LoginPage;
