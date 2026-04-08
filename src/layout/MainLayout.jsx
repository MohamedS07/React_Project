import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard/Sidebar';
import { Box } from '@mui/material';

function MainLayout() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fdfdff' }}>
            <SideBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: 'calc(100% - 240px)',
                    overflow: 'hidden'
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;
