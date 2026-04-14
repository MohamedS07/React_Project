import React, { useState } from "react";
import { Box, Card, TextField, CardContent, Typography, Button, Stack, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import "./RegisterCard.css";

const RegisterCard = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (loading) return;
      setError('');
      setSuccess('');
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        
        if (response.ok) {
          setSuccess('Registration successful! Redirecting to login...');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError(data.message || 'Registration failed');
        }
      } catch (err) {
        setError('Server connection failed');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Card className="register-card">
      <CardContent>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" className="register-title">
            StockVision
          </Typography>
          <Typography variant="body2" className="register-subtitle">
            Join the elite circle of investors.
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2.5}>
            <TextField 
              name="username"
              label="Full Name" 
              fullWidth 
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              className="register-textfield"
            />
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
              className="register-textfield"
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
              className="register-textfield"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              className="register-button"
              fullWidth
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Stack>
        </form>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" className="register-footer-text">
            Already have an account? {' '}
            <Link to="/login" className="register-footer-link">
              Sign In
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


export default RegisterCard;
