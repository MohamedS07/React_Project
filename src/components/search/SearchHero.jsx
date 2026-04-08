import React from 'react';
import { Card, TextField, Button, InputAdornment, CircularProgress } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchHero({ symbol, setSymbol, onSearch, loading }) {
    return (
        <Card sx={{
            p: 1.5,
            display: 'flex',
            gap: 2,
            borderRadius: '16px',
            boxShadow: '0 4px 6px -3px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05)',
            border: '1px solid var(--neutral-200)',
            mb: 4,
            bgcolor: '#ffffff',
            height: '75px',
        }}>
            <TextField
                fullWidth
                placeholder="Enter stock symbol (e.g. AAPL, NVDA, TSLA)..."
                variant="outlined"
                size="small"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search sx={{ color: 'var(--neutral-400)' }} />
                        </InputAdornment>
                    ),
                    sx: { 
                        bgcolor: 'white', 
                        borderRadius: '12px',
                        '& fieldset': { border: 'none' },
                        height: '52px',
                        fontSize: '1rem',
                        fontWeight: 500
                    }
                }}
            />
            <Button
                variant="contained"
                onClick={onSearch}
                disabled={loading}
                sx={{
                    bgcolor: 'black', 
                    borderRadius: '12px',
                    px: 5,
                    height: '52px',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3)',
                    '&:hover': { bgcolor: 'var(--primary-600)', transform: 'translateY(-1px)' },
                    transition: 'all 0.2s'
                }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Analyze Stock'}
            </Button>
        </Card>
    );
}

export default SearchHero;
