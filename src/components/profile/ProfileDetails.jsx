import React from 'react';
import { Card, Box, Typography, TextField, Button } from '@mui/material';

function ProfileDetails() {
    return (
        <Card sx={{ 
            p: 4, 
            borderRadius: '20px', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 4px 6px -1px var(--neutral-100)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <Typography variant="subtitle1" fontWeight="800" sx={{ color: 'var(--text-primary)', mb: 3 }}>
                Personal Information
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box>
                    <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Name</Typography>
                    <TextField 
                        fullWidth 
                        defaultValue="Mohamed Idrish"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                    />
                </Box>

                <Box>
                    <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</Typography>
                    <TextField 
                        fullWidth 
                        defaultValue="mohamed@example.com"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                    />
                </Box>

                <Box>
                    <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</Typography>
                    <TextField 
                        fullWidth 
                        defaultValue="+91 98765 43210"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                    />
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Button 
                        fullWidth
                        variant="contained" 
                        sx={{ 
                            borderRadius: '10px', 
                            py: 1.5,
                            bgcolor: 'var(--primary-600)',
                            textTransform: 'none',
                            fontWeight: 700,
                            boxShadow: '0 4px 6px -1px var(--primary-100)',
                            '&:hover': { bgcolor: 'var(--primary-700)', transform: 'translateY(-1px)' },
                            transition: 'all 0.2s'
                        }}
                    >
                        Update Profile
                    </Button>
                </Box>
            </Box>
        </Card>
    );
}

export default ProfileDetails;

