import React from 'react';
import { Card } from '@mui/material';
import { Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';

function ProfileHeader() {
    return (
        <Card sx={{
            p: 4,
            borderRadius: '16px',
            border: '1px solid #f1f5f9',
            boxShadow: 'none',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 4
        }}>
            <Avatar sx={{ width: 100, height: 100, bgcolor: '#f1f5f9' }} />
            
          
        </Card>
    );
}

export default ProfileHeader;
