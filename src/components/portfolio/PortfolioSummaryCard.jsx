import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown, AccountBalanceWallet } from '@mui/icons-material';

function PortfolioSummaryCard({ title, value, change, isPositive }) {
    return (
        <Card sx={{
            p: 3,
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            boxShadow: '0 4px 6px -1px var(--neutral-100)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            bgcolor: 'white',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 10px 15px -3px var(--neutral-200)',
            }
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    bgcolor: 'var(--primary-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-600)'
                }}>
                    <AccountBalanceWallet fontSize="small" />
                </Box>
                <Box sx={{
                    px: 1,
                    py: 0.5,
                    borderRadius: '8px',
                    bgcolor: isPositive ? '#dcfce7' : '#fee2e2',
                    color: isPositive ? '#10b981' : '#f43f5e',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                }}>
                    {isPositive ? <TrendingUp sx={{ fontSize: 14 }} /> : <TrendingDown sx={{ fontSize: 14 }} />}
                    {change}
                </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="var(--text-secondary)" fontWeight="500">
                    {title}
                </Typography>
                <Typography variant="h4" fontWeight="800" sx={{ color: 'var(--text-primary)', mt: 0.5 }}>
                    {value}
                </Typography>
            </Box>
        </Card>
    );
}

export default PortfolioSummaryCard;
