import React from 'react';
import { Card} from '@mui/material';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import {Box} from '@mui/material';

function SearchHero() {
    return (
        <Card sx={{
            p: 2,
            display: 'flex',
            gap: 2,
            borderRadius: '16px',
            boxShadow: 'none',
            border: '1px solid #e2e8f0',
            mb: 3
        }}>
            <TextField
                fullWidth
                placeholder="Enter stock"
                variant="outlined"
                size="small"
                sx={{ bgcolor: '#f8fafc', borderRadius: '8px', '& fieldset': { border: 'none' } }}
            />
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#3b82f6',
                    borderRadius: '8px',
                    px: 4,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#2563eb' }
                }}
            >
                Analyze Stock
            </Button>
        </Card>
    );
}

export default SearchHero;
