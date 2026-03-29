import React from 'react';
import { 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    Card, Box, Typography
} from '@mui/material';
import PortfolioStockRow from './PortfolioStockRow';

function PortfolioStockTable({ stocks, onRemove }) {
    return (
        <Card sx={{ 
            borderRadius: '24px', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 4px 6px -1px var(--neutral-100)',
            bgcolor: 'white',
            overflow: 'hidden'
        }}>
            

            <TableContainer>
                <Table sx={{ minWidth: 800 }}>
                    <TableHead sx={{ bgcolor: 'var(--neutral-50)' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Assets</TableCell>
                            <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Saved Price</TableCell>
                            <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Current Price</TableCell>
                            <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Change</TableCell>
                            <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Date Saved</TableCell>
                            <TableCell align="center" sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stocks.map((stock) => (
                            <PortfolioStockRow 
                                key={stock.symbol}
                                {...stock}
                                onRemove={() => onRemove(stock.symbol)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default PortfolioStockTable;
