import React from 'react';
import { Box, TextField, InputAdornment, IconButton, Typography, Avatar, Badge } from '@mui/material';
import { Search, NotificationsNone } from '@mui/icons-material';

import "./TopBar.css";

function TopBar() {
    const username = localStorage.getItem('username') || 'Guest Analyst';

    return ( 
        <Box className="topbar-container">
            <Box className="topbar-search-box">
                <TextField
                    fullWidth
                    placeholder="Search by company name or symbol..."
                    variant="outlined"
                    size="small"
                    className="topbar-search-input"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search className="topbar-search-icon" />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <Box className="topbar-actions">
                <IconButton size="small" className="topbar-notification-btn">
                    <Badge color="error" variant="dot">
                        <NotificationsNone />
                    </Badge>
                </IconButton>
                
                <Box className="topbar-user-profile">
                    <Box className="topbar-user-info">
                        <Typography variant="body2" className="topbar-username">
                            {username}
                        </Typography>
                        <Typography variant="caption" className="topbar-user-role">
                            Investor
                        </Typography>
                    </Box>
                    <Avatar 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        className="topbar-avatar"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TopBar;
