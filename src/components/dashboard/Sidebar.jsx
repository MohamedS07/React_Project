import React from "react";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Dashboard, Search, AccountBalanceWallet, Person } from "@mui/icons-material";

function SideBar() {
    return (
        <Box
            sx={{
                width: 240,
                height: "100vh",
                bgcolor: "white",
                borderRight: "1px solid #ddd",
            }}
        >
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold">Menu</Typography>
            </Box>

            <List>
                <ListItem button>
                    <ListItemIcon><Dashboard /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Search /></ListItemIcon>
                    <ListItemText primary="Search Stock" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
                    <ListItemText primary="My Portfolio" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
        </Box>
    );
}

export default SideBar;