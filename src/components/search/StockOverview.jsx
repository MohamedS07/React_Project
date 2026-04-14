import { Grid } from "@mui/material";
import StockMainCard from "./StockMainCard";
import MarketInsightsCard from "./MarketInsightsCard";
import "./StockOverview.css";

function StockOverview({ data }) {
    return (
        <Grid container spacing={4} className="stock-overview-grid">
            
            <Grid item xs={12} lg={8}>
                <StockMainCard data={data} />
            </Grid>

            
            <Grid item xs={12} lg={4}>
                <MarketInsightsCard data={data} />
            </Grid>
        </Grid>
    );
}

export default StockOverview;
