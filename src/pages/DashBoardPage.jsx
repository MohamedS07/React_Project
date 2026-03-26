import DashboardSummary from "../components/dashboard/DashboardSummary";
import SearchBar from "../components/dashboard/SearchBar";
import MarketTrendBox from "../components/dashboard/MarketTrendBox";
import MarketTrendChart from "../components/dashboard/MarketTrendChart";
import TopMoversBox from "../components/dashboard/TopMoversBox";
import { Typography, Grid, Box } from "@mui/material";
import { TrendingUp, ShowChart, TrendingDown } from "@mui/icons-material";


function DashBoardPage() {
  return (
    <Box sx={{ p: 3 }}>
      <SearchBar />

      <Typography variant="h5"  mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <DashboardSummary
          title="Total Investment"
          value="0"
          icon={<TrendingUp sx={{ fontSize: 18 }} />}
          trend="0"
        />
        <DashboardSummary
          title="Current Value"
          value="0"
          icon={<ShowChart sx={{ fontSize: 18 }} />}
          trend="0"
        />
        <DashboardSummary
          title="Total Profit / Loss"
          value="0"
          icon={<TrendingUp sx={{ fontSize: 18 }} />}
          trend="0"
        />
        <DashboardSummary
          title="Overall Return %"
          value="0"
          icon={<TrendingDown sx={{ fontSize: 18 }} />}
          trend="0"
        />
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <MarketTrendBox/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TopMoversBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashBoardPage;
