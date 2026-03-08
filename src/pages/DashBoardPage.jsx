import React from "react";
import SideBar from "../components/dashboard/Sidebar";
import DashboardSummary from "../components/dashboard/DashboardSummary";
import SearchBar from "../components/dashboard/SearchBar";
import MarketTrendBox from "../components/dashboard/MarketTrendBox";
import TopMoversBox from "../components/dashboard/TopMoversBox";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
import { ShowChart } from "@mui/icons-material";
import { TrendingDown } from "@mui/icons-material";

function DashBoardPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />

      <Box sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: '#fdfdff',
        width: 'calc(100% - 240px)',
        overflow: 'hidden'
      }}>
        <SearchBar />

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Dashboard
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <DashboardSummary
            title="Total Investment"
            value=""
            icon={<TrendingUp sx={{ fontSize: 18 }} />}
            trend=""
          />
          <DashboardSummary
            title="Current Value"
            value=""
            icon={<ShowChart sx={{ fontSize: 18 }} />}
            trend=""
          />
          <DashboardSummary
            title="Total Profit / Loss"
            value=""
            icon={<TrendingUp sx={{ fontSize: 18 }} />}
            trend=""
          />
          <DashboardSummary
            title="Overall Return %"
            value=""
            icon={<TrendingDown sx={{ fontSize: 18 }} />}
            trend=""
          />
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            <MarketTrendBox />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopMoversBox />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashBoardPage;
