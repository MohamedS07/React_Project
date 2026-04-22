import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Card, CardContent, TextField, Typography, Button, Stack, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import "./LoginCard.css";
import API_BASE_URL from "../../config";

const LoginCard = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (loading) return;
      setError('');
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          navigate('/dashboard');
        } else {
          setError(data.message || 'Login failed');
        }
      } catch (err) {
        setError('Server connection failed');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Card className="login-card">
      <CardContent>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" className="login-title">
            StockVision
          </Typography>
          <Typography variant="body2" className="login-subtitle">
            Welcome back, Analyst.
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2.5}>
            <TextField 
              name="email"
              label="Email Address" 
              fullWidth 
              type="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className="login-textfield"
            />
            <TextField 
              name="password"
              label="Password" 
              fullWidth 
              type="password" 
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className="login-textfield"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              className="login-button"
              fullWidth
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </Stack>
        </form>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" className="login-footer-text">
            Don't have an account? {' '}
            <Link to="/register" className="login-footer-link">
              Join us now
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
