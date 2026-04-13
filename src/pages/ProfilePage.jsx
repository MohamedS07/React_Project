import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, CircularProgress, Alert } from '@mui/material';
import SearchBar from '../components/dashboard/SearchBar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileDetails from '../components/profile/ProfileDetails';

import "./ProfilePage.css";

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
        <Box className="profile-page-wrapper">
            <Box className="profile-search-section">
                <SearchBar />
            </Box>

            <Container maxWidth="sm" className="profile-container">
                <Box className="profile-settings-header">
                    <Typography variant="h4" className="profile-title">
                        Profile Settings
                    </Typography>
                    <Typography variant="body2" className="profile-subtitle">
                        Manage your account and preferences
                    </Typography>
                </Box>

                {loading ? (
                    <Box className="profile-loading"><CircularProgress /></Box>
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
