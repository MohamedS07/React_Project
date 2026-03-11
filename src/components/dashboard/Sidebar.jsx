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
                    <Link to="/dashboard">Dashboard</Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Search /></ListItemIcon>
                    <Link to="/stock">Search Stocks</Link>
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