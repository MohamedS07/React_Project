import { Card} from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';

function ProfileDetails() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: 'none' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>Personal Information</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField fullWidth label="Full Name" variant="outlined" size="small" />
                        <TextField fullWidth label="Email Address" variant="outlined" size="small" />
                        <TextField fullWidth label="Phone Number" variant="outlined" size="small" />
                    </Box>
                </Card>
            </Grid>

            
        </Grid>
    );
}

export default ProfileDetails;
