import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, CircularProgress, Alert } from '@mui/material';
import SearchBar from '../components/dashboard/SearchBar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileDetails from '../components/profile/ProfileDetails';

function ProfilePage() {
    const [profile, setProfile] = useState({ username: '', email: '', phone: '', avatar: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/auth/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (res.ok) {
                setProfile({
                    username: data.username || '',
                    email: data.email || '',
                    phone: data.phone || '',
                    avatar: data.avatar || ''
                });
            } else {
                setError(data.message || 'Failed to load profile');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleProfileUpdate = async (updatedData) => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/auth/profile', {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            });
            const data = await res.json();
            if (res.ok) {
                setProfile({
                    username: data.user.username || '',
                    email: data.user.email || '',
                    phone: data.user.phone || '',
                    avatar: data.user.avatar || ''
                });
                localStorage.setItem('username', data.user.username);
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message || 'Update failed' };
            }
        } catch (err) {
            return { success: false, message: 'Server connection failed' };
        }
    };

    const handleAvatarChange = (avatarUrl) => {
        handleProfileUpdate({ ...profile, avatar: avatarUrl });
    };

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

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <>
                        <ProfileHeader profile={profile} onAvatarChange={handleAvatarChange} />
                        <ProfileDetails profile={profile} onUpdate={handleProfileUpdate} />
                    </>
                )}
            </Container>
        </Box>
    );
}

export default ProfilePage;
