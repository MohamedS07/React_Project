import React from "react";
import { Card, TextField, InputAdornment, Button, CircularProgress, Autocomplete } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./SearchHero.css";

const commonStocks = [
    "AAPL", "MSFT", "GOOGL", "NVDA", "TSLA", "AMZN", "META", "NFLX",
    "JPM", "V", "WMT", "JNJ", "DIS", "PYPL", "AMD", "INTC", 
    "BTC/USD", "ETH/USD", "EUR/USD", "RELIANCE", "INFY", "TCS"
];

function SearchHero({ symbol, setSymbol, onSearch, loading }) {
    return (
        <Card className="search-hero-card">
            <Autocomplete
                freeSolo
                options={commonStocks}
                value={symbol}
                onChange={(event, newValue) => {
                    setSymbol(newValue || "");
                }}
                onInputChange={(event, newInputValue) => {
                    setSymbol(newInputValue.toUpperCase());
                }}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Enter stock symbol (e.g. AAPL, NVDA, TSLA)..."
                        variant="outlined"
                        size="small"
                        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                        className="search-hero-input"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search className="search-hero-icon" />
                                </InputAdornment>
                            )
                        }}
                    />
                )}
            />
            <Button
                variant="contained"
                onClick={onSearch}
                disabled={loading}
                className="search-hero-btn"
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Analyze Stock'}
            </Button>
        </Card>
    );
}

export default SearchHero;
