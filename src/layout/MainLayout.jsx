import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard/Sidebar';
import { Box } from '@mui/material';
import "./MainLayout.css";

function MainLayout() {
    return (
        <Box className="main-layout-container">
            <SideBar />
            <Box
                component="main"
                className="main-content-area"
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;
