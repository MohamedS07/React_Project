import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

function RemoveStockButton({ onClick }) {
    return (
        <Tooltip title="Remove Stock">
            <IconButton 
                onClick={onClick}
                sx={{
                    color: 'var(--neutral-400)',
                    bgcolor: 'var(--neutral-50)',
                    '&:hover': {
                        color: '#f43f5e',
                        bgcolor: '#fee2e2',
                        transform: 'rotate(-10deg)',
                    },
                    borderRadius: '10px',
                    transition: 'all 0.2s',
                    width: '36px',
                    height: '36px'
                }}
            >
                <DeleteOutline fontSize="small" />
            </IconButton>
        </Tooltip>
    );
}

export default RemoveStockButton;
