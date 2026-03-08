import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SideBar from '../components/dashboard/Sidebar';
import SearchBar from '../components/dashboard/SearchBar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileDetails from '../components/profile/ProfileDetails';

function ProfilePage() {
    return (
        <Box sx={{ display: 'flex', bgcolor: '#fdfdff', minHeight: '100vh' }}>
            <SideBar />

            <Box sx={{
                flexGrow: 1,
                width: 'calc(100% - 240px)',
                overflow: 'hidden'
            }}>
                <Box sx={{ p: 3 }}>
                    <SearchBar />

                    <Container maxWidth="xl" sx={{ mt: 2 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                            Profile Settings
                        </Typography>

                        <ProfileHeader />
                        <ProfileDetails />

                        <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                            <div style={{ width: '200px', height: '12px', background: '#f8fafc', borderRadius: '4px', margin: '0 auto' }}></div>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ProfilePage;
