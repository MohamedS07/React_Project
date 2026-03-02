import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import {
  Dashboard,
  Search,
  AccountBalanceWallet,
  TrendingUp,
  Person,
  Notifications,
} from "@mui/icons-material";




const DashBoardPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f6fa" }}>
      
      
      <Box
        sx={{
          width: 240,
          bgcolor: "white",
          p: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          
        </Typography>

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
            <ListItemIcon><AutoAwesomeIcon/></ListItemIcon>
            <ListItemText primary="AI Insights" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Box>

     
      <Box sx={{ flex: 1, p: 3 }}>
        
       
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: "40%" }}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1 }} />,
            }}
          />

         
        </Box>

        <Typography variant="h5" fontWeight="bold" mb={2}>
          Dashboard
        </Typography>

       
        <Grid container spacing={2}>
          {[
            { title: "Total Investment", value: "" },
            { title: "Current Value", value: "" },
            { title: "Total Profit / Loss", value: "" },
            { title: "Overall Return %", value: "" },
          ].map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

       
        <Grid container spacing={2} mt={1}>
          
         

         
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography fontWeight="bold" mb={2}>
                  Top Movers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          
        
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography fontWeight="bold" mb={2}>
                  Recent Activity
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>

          
         
        </Grid>
      </Box>
    </Box>
  );
};

export default DashBoardPage;