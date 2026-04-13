import React from 'react';
import { Box, TextField, InputAdornment, IconButton, Typography, Avatar, Badge } from '@mui/material';
import { Search, NotificationsNone } from '@mui/icons-material';

function TopBar() {
    const username = localStorage.getItem('username') || 'Guest Analyst';

    return ( 
        <Box sx={{ 
            height: '70px', 
            bgcolor: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            px: 4,
            borderBottom: '1px solid var(--neutral-100)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <Box sx={{ width: '400px' }}>
                <TextField
                    fullWidth
                    placeholder="Search by company name or symbol..."
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search sx={{ color: 'var(--neutral-400)', fontSize: 20 }} />
                            </InputAdornment>
                        ),
                        sx: { 
                            bgcolor: 'var(--neutral-50)', 
                            borderRadius: '12px',
                            '& fieldset': { border: 'none' },
                            fontSize: '0.85rem'
                        }
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <IconButton size="small" sx={{ color: 'var(--neutral-500)' }}>
                    <Badge color="error" variant="dot">
                        <NotificationsNone />
                    </Badge>
                </IconButton>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight="700" sx={{ color: 'var(--neutral-900)', lineHeight: 1.2 }}>
                            {username}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'var(--neutral-400)', fontWeight: 600 }}>
                            Investor
                        </Typography>
                    </Box>
                    <Avatar 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        sx={{ width: 36, height: 36, borderRadius: '10px' }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TopBar;
