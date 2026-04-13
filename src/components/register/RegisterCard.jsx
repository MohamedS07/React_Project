import React, { useState } from "react";
import { Box, Card, TextField, CardContent, Typography, Button, Stack, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        const response = await fetch('http://localhost:5000/auth/signup', {
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
    <Card
      sx={{
        borderRadius: '24px',
        p: 1.5,
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(18px) saturate(160%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
        color: "#fff",
        overflow: 'visible'
      }}
    >
      <CardContent>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="800" sx={{ color: "#fff", letterSpacing: '-1px' }}>
            StockVision
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mt: 1 }}>
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiFormHelperText-root': { color: '#ff8a80' }
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiFormHelperText-root': { color: '#ff8a80' }
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                '& .MuiFormHelperText-root': { color: '#ff8a80' }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: "700",
                background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
              }}
              fullWidth
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Stack>
        </form>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Already have an account? {' '}
            <Link to="/login" style={{ 
              color: 'var(--primary-300)', 
              fontWeight: 700, 
              textDecoration: 'none',
            }}>
              Sign In
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegisterCard;
