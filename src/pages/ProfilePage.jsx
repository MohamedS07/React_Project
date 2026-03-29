import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SearchBar from '../components/dashboard/SearchBar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileDetails from '../components/profile/ProfileDetails';

function ProfilePage() {
    return (
        <Box sx={{ 
            bgcolor: 'var(--bg-main)', 
            minHeight: '100vh',
            pb: 8
        }}>
            <Box sx={{ p: 4 }}>
                <SearchBar />
            </Box>

            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="800" sx={{ color: 'var(--text-primary)' }}>
                        Profile Settings
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mt: 1 }}>
                        Manage your account and preferences
                    </Typography>
                </Box>

                <ProfileHeader />
                <ProfileDetails />
            </Container>
        </Box>
    );
}

export default ProfilePage;

