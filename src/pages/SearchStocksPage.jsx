import React from "react";
import SearchBar from "../components/dashboard/SearchBar";
import SearchHero from "../components/search/SearchHero";
import StockOverview from "../components/search/StockOverview";
import PriceTrendLarge from "../components/search/PriceTrendLarge";
import { Box, Typography } from "@mui/material";

function SearchStocksPage() {
  return (
    <Box sx={{ p: 3 }}>
      

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Stock Search
      </Typography>

      <SearchHero />
      <StockOverview />
      <PriceTrendLarge />
    </Box>
  );
}

export default SearchStocksPage;
  