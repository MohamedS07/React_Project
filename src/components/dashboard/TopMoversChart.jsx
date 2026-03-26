import React from "react";
import { Typography, Box, Avatar, Stack, Link } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const movers = [
  { symbol: "META", price: "$312.50", change: "+4.2%", up: true },
  { symbol: "AMZN", price: "$123.10", change: "-1.8%", up: false },
  { symbol: "NFLX", price: "$448.20", change: "+2.5%", up: true }
];

function TopMoversChart() {
  return (
    <>

      <Typography variant="body2" color="text.secondary" mb={2}>
        Stocks with high volatility today
      </Typography>

      <Stack spacing={2}>
        {movers.map((stock, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.5,
              borderRadius: 2,
              border: "1px solid #eee"
            }}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <Avatar sx={{ width: 32, height: 32 }}>
                {stock.symbol[0]}
              </Avatar>

              <Box>
                <Typography fontWeight={600}>{stock.symbol}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {stock.price}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              {stock.up ? (
                <TrendingUp sx={{ color: "green", fontSize: 18 }} />
              ) : (
                <TrendingDown sx={{ color: "red", fontSize: 18 }} />
              )}

              <Typography fontWeight={600} color={stock.up ? "green" : "red"}>
                {stock.change}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {/* <Link
        href="https://finviz.com/map.ashx"
        target="_blank"
        underline="none"
        sx={{
          display: "block",
          mt: 2,
          fontWeight: 500,
          color: "#1976d2",
          fontSize: 14
        }}
      >
        View Market Heatmap →
      </Link> */}

    </>
  );
}

export default TopMoversChart;