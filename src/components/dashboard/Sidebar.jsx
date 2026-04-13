import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Dashboard, Search, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
    return (
        <Box className="sidebar-container">
            <Box className="sidebar-header">
                <Typography variant="h5" className="sidebar-logo-text">
                    StockVision
                </Typography>
            </Box>

            <List className="sidebar-list">
                {[
                    { text: "Dashboard", icon: <Dashboard />, to: "/" },
                    { text: "Search Stocks", icon: <Search />, to: "/search" },
                    { text: "Profile", icon: <Person />, to: "/profile" },
                ].map((item) => (
                    <ListItemButton
                        key={item.text} 
                        component={Link} 
                        to={item.to}
                        className="sidebar-item-button"
                    >
                        <ListItemIcon className="sidebar-item-icon">
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.text} 
                            primaryTypographyProps={{ 
                                className: "sidebar-item-text-primary"
                            }} 
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default SideBar;