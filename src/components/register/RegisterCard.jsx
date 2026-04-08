import React, { useState } from "react";
import { Box, Card, TextField, CardContent, Typography, Button, Stack, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const RegisterCard = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
    }
  };

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

        <Stack spacing={2.5}>
          <TextField 
            label="Full Name" 
            fullWidth 
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <TextField 
            label="Email Address" 
            fullWidth 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <TextField 
            label="Password" 
            fullWidth 
            type="password" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleRegister}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: "700",
              background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
            }}
            fullWidth
          >
            Create Account
          </Button>
        </Stack>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Already have an account? {' '}
            <Link to="/login" style={{ 
              color: 'var(--primary-300)', 
              fontWeight: 700, 
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
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
