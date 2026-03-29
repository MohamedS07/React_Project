import React from 'react';
import { Card} from '@mui/material';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import {Box} from '@mui/material';

function SearchHero() {
    return (
        <Card sx={{
            p: 1.5,
            display: 'flex',
            gap: 2,
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px var(--neutral-100)',
            border: '1px solid var(--border-light)',
            mb: 3
        }}>
            <TextField
                fullWidth
                placeholder="Search stocks (e.g., AAPL, GOOGL)"
                variant="outlined"
                size="small"
                sx={{ 
                    bgcolor: 'white', 
                    borderRadius: '10px', 
                    '& fieldset': { border: 'none' },
                    '& .MuiInputBase-root': { height: '44px' } 
                }}
            />
            <Button
                variant="contained"
                sx={{
                    bgcolor: 'var(--primary-600)',
                    borderRadius: '10px',
                    px: 4,
                    height: '44px',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'var(--primary-700)', transform: 'translateY(-1px)' },
                    transition: 'all 0.2s'
                }}
            >
                Analyze
            </Button>
        </Card>
    );
}

export default SearchHero;
