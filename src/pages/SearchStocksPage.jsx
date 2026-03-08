import React from "react";
import SideBar from "../components/dashboard/Sidebar";
import SearchBar from "../components/dashboard/SearchBar";
import SearchHero from "../components/search/SearchHero";
import StockOverview from "../components/search/StockOverview";
import PriceTrendLarge from "../components/search/PriceTrendLarge";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function SearchStocksPage() {
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
          Stock Search
        </Typography>

        <SearchHero />

        <StockOverview />


        <PriceTrendLarge />




      </Box>
    </Box>
  );
};

export default SearchStocksPage;
