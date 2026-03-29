import React, { useRef } from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import { CameraAlt as CameraIcon } from '@mui/icons-material';

function ProfileHeader() {
    const fileInputRef = useRef(null);

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
            
        }
    };

    return (
        <Box sx={{
            textAlign: 'center',
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }}>
            <Box sx={{ position: 'relative' }}>
                <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    sx={{ 
                        width: 110, 
                        height: 110, 
                        bgcolor: '#f1f5f9',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.85 }
                    }} 
                    onClick={handleAvatarClick}
                />
                <IconButton 
                    onClick={handleAvatarClick}
                    sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        bgcolor: '#ffffff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '&:hover': { bgcolor: '#f8fafc' },
                        padding: '6px'
                    }}
                    size="small"
                >
                    <CameraIcon sx={{ fontSize: 18, color: '#64748b' }} />
                </IconButton>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    accept="image/*"
                />
            </Box>
            
            <Box>
                <Typography variant="h5" fontWeight="700" sx={{ color: '#1e293b' }}>
                    Mohamed Idrish
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
                    mohamed@example.com
                </Typography>
            </Box>
        </Box>
    );
}

export default ProfileHeader;


