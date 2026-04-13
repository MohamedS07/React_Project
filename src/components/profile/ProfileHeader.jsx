import React, { useRef } from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import { CameraAlt as CameraIcon } from '@mui/icons-material';

import "./ProfileHeader.css";

function ProfileHeader({ profile, onAvatarChange }) {
    const fileInputRef = useRef(null);

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onAvatarChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box className="profile-header-container">
            <Box className="avatar-wrapper">
                <Avatar 
                    src={profile?.avatar}
                    className="profile-avatar"
                    onClick={handleAvatarClick}
                >
                    {profile?.username?.charAt(0)?.toUpperCase()}
                </Avatar>
                <IconButton 
                    onClick={handleAvatarClick}
                    className="avatar-edit-btn"
                    size="small"
                >
                    <CameraIcon className="camera-icon" />
                </IconButton>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    accept="image/*"
                />
            </Box>
            
            <Box className="profile-info-display">
                <Typography variant="h5" className="profile-info-username">
                    {profile?.username || "Investor"}
                </Typography>
                <Typography variant="body2" className="profile-info-email">
                    {profile?.email}
                </Typography>
            </Box>
        </Box>
    );
}

export default ProfileHeader;


