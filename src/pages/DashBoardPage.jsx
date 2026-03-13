import DashboardSummary from "../components/dashboard/DashboardSummary";
import SearchBar from "../components/dashboard/SearchBar";
import MarketTrendBox from "../components/dashboard/MarketTrendBox";
import TopMoversBox from "../components/dashboard/TopMoversBox";
import { Typography, Grid, Box } from "@mui/material";
import { TrendingUp, ShowChart, TrendingDown } from "@mui/icons-material";


function DashBoardPage() {
  return (
    <Box sx={{ p: 3 }}>
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
  );
}

export default DashBoardPage;
