import React from "react";
import { Card, TextField, InputAdornment, Button, CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./SearchHero.css";

function SearchHero({ symbol, setSymbol, onSearch, loading }) {
    return (
        <Card className="search-hero-card">
            <TextField
                fullWidth
                placeholder="Enter stock symbol (e.g. AAPL, NVDA, TSLA)..."
                variant="outlined"
                size="small"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="search-hero-input"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search className="search-hero-icon" />
                        </InputAdornment>
                    )
                }}
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
