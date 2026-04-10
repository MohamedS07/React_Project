import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Dashboard, Search, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";


function SideBar() {
    return (
        <Box
            sx={{
                width: 240,
                height: "100vh",
                bgcolor: "var(--bg-sidebar)",
                borderRight: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box sx={{ p: 3, borderBottom: '1px solid var(--border-light)' }}>
                <Typography variant="h5" fontWeight="800" sx={{ color: '#000000', letterSpacing: '-0.5px' }}>
                    StockVision
                </Typography>
            </Box>

            <List sx={{ px: 1, py: 2 }}>
                {[
                    { text: "Dashboard", icon: <Dashboard />, to: "/" },
                    { text: "Search Stocks", icon: <Search />, to: "/search" },
                    { text: "Profile", icon: <Person />, to: "/profile" },
                ].map((item) => (
                    <ListItemButton
                        key={item.text} 
                        component={Link} 
                        to={item.to}
                        sx={{
                            borderRadius: '12px',
                            mb: 0.5,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: '',
                                '& .MuiListItemIcon-root': { color: '#000000' }
                            },
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 40, color: 'var(--neutral-500)' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.text} 
                            primaryTypographyProps={{ 
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                color: '#000000'
                            }} 
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default SideBar;