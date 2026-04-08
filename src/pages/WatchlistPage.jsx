import React, { useState, useEffect } from 'react';
import {
    Box, Container, Typography, Card,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Avatar, IconButton,
    CircularProgress, Chip
} from '@mui/material';
import { Delete, Bookmark } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function WatchlistPage() {
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchWatchlist = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/watchlist', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setWatchlist(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Watchlist fetch error:', err);
            setWatchlist([]);
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async (symbol) => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`http://localhost:5000/api/watchlist/${symbol}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setWatchlist(watchlist.filter(item => item.symbol !== symbol));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchWatchlist();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3, bgcolor: 'var(--bg-main)', minHeight: '100vh' }}>
            <Container maxWidth="xl" sx={{ mt: 2, px: '0 !important' }}>

                {/* Hero Header — matches PortfolioHero style */}
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                        <Typography variant="h4" fontWeight="700" sx={{ color: '#1e293b' }}>
                            My Watchlist
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--neutral-500)', mt: 0.5 }}>
                            {watchlist.length} stock{watchlist.length !== 1 ? 's' : ''} saved
                        </Typography>
                    </Box>
                    <Chip
                        icon={<Bookmark sx={{ fontSize: 16 }} />}
                        label="Saved Stocks"
                        sx={{ bgcolor: 'var(--neutral-100)', fontWeight: 600, borderRadius: '10px' }}
                    />
                </Box>

                {/* Table — matches PortfolioStockTable style */}
                <Card sx={{
                    borderRadius: '24px',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 6px -1px var(--neutral-100)',
                    bgcolor: 'white',
                    overflow: 'hidden'
                }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 700 }}>
                            <TableHead sx={{ bgcolor: 'var(--neutral-50)' }}>
                                <TableRow>
                                    <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Assets</TableCell>
                                    <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Saved Price</TableCell>
                                    <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Current Price</TableCell>
                                    <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Change</TableCell>
                                    <TableCell sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Date Added</TableCell>
                                    <TableCell align="center" sx={{ color: 'var(--text-secondary)', fontWeight: 700, px: 4, py: 2 }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {watchlist.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center" sx={{ py: 6, color: 'var(--neutral-400)' }}>
                                            Your watchlist is empty. Go to <strong>Search Stocks</strong> to add some!
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    watchlist.map((item) => {
                                        const isPositive = parseFloat(item.change) >= 0;
                                        return (
                                        <TableRow
                                            key={item.symbol}
                                            hover
                                            sx={{ '&:last-child td': { border: 0 }, transition: 'background 0.15s' }}
                                        >
                                            {/* Asset Column */}
                                            <TableCell sx={{ px: 4, py: 2.5 }}>
                                                <Box display="flex" alignItems="center" gap={1.5}>
                                                    <Avatar sx={{
                                                        width: 38, height: 38,
                                                        bgcolor: 'var(--neutral-100)',
                                                        color: '#1e293b',
                                                        fontWeight: 800,
                                                        fontSize: '0.85rem'
                                                    }}>
                                                        {item.symbol?.[0]}
                                                    </Avatar>
                                                    <Box>
                                                        <Typography fontWeight={700} fontSize="0.95rem">{item.symbol}</Typography>
                                                        <Typography variant="caption" color="text.secondary">{item.name || '—'}</Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>

                                            {/* Saved Price Column */}
                                            <TableCell sx={{ px: 4, py: 2.5, fontWeight: 600 }}>
                                                ${parseFloat(item.savedPrice || 0).toFixed(2)}
                                            </TableCell>

                                            {/* Current Price Column */}
                                            <TableCell sx={{ px: 4, py: 2.5, fontWeight: 700 }}>
                                                ${parseFloat(item.currentPrice || item.savedPrice || 0).toFixed(2)}
                                            </TableCell>

                                            {/* Change Column */}
                                            <TableCell sx={{ px: 4, py: 2.5 }}>
                                                <Typography 
                                                    variant="body2" 
                                                    fontWeight="700" 
                                                    sx={{ 
                                                        color: isPositive ? '#10b981' : '#ef4444',
                                                        bgcolor: isPositive ? '#ecfdf5' : '#fef2f2',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: '8px',
                                                        display: 'inline-block'
                                                    }}
                                                >
                                                    {isPositive ? '+' : ''}{item.percentChange || '0%'}
                                                </Typography>
                                            </TableCell>

                                            {/* Date Added Column */}
                                            <TableCell sx={{ px: 4, py: 2.5, color: 'var(--neutral-500)', fontSize: '0.875rem' }}>
                                                {item.addedAt
                                                    ? new Date(item.addedAt).toLocaleDateString('en-IN', {
                                                        day: 'numeric', month: 'short', year: 'numeric'
                                                    })
                                                    : '—'
                                                }
                                            </TableCell>

                                            {/* Remove Action Column */}
                                            <TableCell align="center" sx={{ px: 4, py: 2.5 }}>
                                                <IconButton
                                                    onClick={() => handleRemove(item.symbol)}
                                                    size="small"
                                                    sx={{
                                                        color: '#ef4444',
                                                        bgcolor: '#fef2f2',
                                                        borderRadius: '10px',
                                                        p: 1,
                                                        '&:hover': { bgcolor: '#fee2e2' }
                                                    }}
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        );
                                    })
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>

            </Container>
        </Box>
    );
}

export default WatchlistPage;
