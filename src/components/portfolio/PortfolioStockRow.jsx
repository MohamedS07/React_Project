import React from 'react';
import { TableRow, TableCell, Box, Typography, Chip } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import RemoveStockButton from './RemoveStockButton';

function PortfolioStockRow({ symbol, name, savedPrice, currentPrice, change, savedDate, onRemove }) {
    const isPositive = change.startsWith('+');

    return (
        <TableRow sx={{ 
            '&:last-child td, &:last-child th': { border: 0 },
            '& .MuiTableCell-root': { py: 2.5, borderBottom: '1px solid var(--neutral-100)', px: 4 },
            '&:hover': { bgcolor: 'var(--neutral-50)' },
            transition: 'background-color 0.2s'
        }}>
            <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" fontWeight="800" color="var(--primary-700)">
                        {symbol}
                    </Typography>
                    <Typography variant="caption" color="var(--text-secondary)" fontWeight="500">
                        {name}
                    </Typography>
                </Box>
            </TableCell>

            <TableCell>
                <Typography variant="body2" fontWeight="700" color="var(--text-primary)">
                    ${savedPrice}
                </Typography>
            </TableCell>

            <TableCell>
                <Typography variant="body2" fontWeight="700" color="var(--text-primary)">
                    ${currentPrice}
                </Typography>
            </TableCell>

            <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: isPositive ? '#10b981' : '#f43f5e' }}>
                    {isPositive ? <TrendingUp fontSize="inherit" /> : <TrendingDown fontSize="inherit" />}
                    <Typography variant="body2" fontWeight="700">
                        {change}
                    </Typography>
                </Box>
            </TableCell>

            <TableCell>
                <Typography variant="body2" color="var(--text-secondary)" fontWeight="500">
                    {savedDate}
                </Typography>
            </TableCell>

            <TableCell align="center">
                <RemoveStockButton onClick={onRemove} />
            </TableCell>
        </TableRow>
    );
}

export default PortfolioStockRow;
