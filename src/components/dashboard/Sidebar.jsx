import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
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
                <Typography variant="h5" fontWeight="800" sx={{ color: "var(--primary-700)", letterSpacing: '-0.5px' }}>
                    STOCK-IT
                </Typography>
            </Box>

            <List sx={{ px: 1, py: 2 }}>
                {[
                    { text: "Dashboard", icon: <Dashboard />, to: "/" },
                    { text: "Search Stocks", icon: <Search />, to: "/search" },
                    { text: "My Portfolio", icon: <AccountBalanceWallet />, to: "/portfolio" },
                    { text: "AI Insights", icon: <Search />, to: "/ai-insights" },
                    { text: "Profile", icon: <Person />, to: "/profile" },
                ].map((item) => (
                    <ListItem 
                        button 
                        key={item.text} 
                        component={Link} 
                        to={item.to}
                        sx={{
                            borderRadius: '12px',
                            mb: 0.5,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: 'var(--primary-50)',
                                color: 'var(--primary-700)',
                                '& .MuiListItemIcon-root': { color: 'var(--primary-700)' }
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
                                fontSize: '0.9rem'
                            }} 
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SideBar;