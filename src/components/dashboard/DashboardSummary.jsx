import { Grid } from "@mui/material";
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from '@mui/material';

function DashboardSummary({ title, value, icon, trend }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{
        borderRadius: '16px',
        height: 170,
        minWidth: '270px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: '24px',
        boxShadow: '0 4px 6px -1px var(--neutral-200), 0 2px 4px -2px var(--neutral-100)',
        border: '1px solid var(--border-light)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 15px -3px var(--neutral-200)',
        }
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-600)'
          }}>
            {icon}
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: trend?.startsWith('+') ? '#10b981' : '#f43f5e',
            fontSize: '12px',
            fontWeight: 700,
            bgcolor: trend?.startsWith('+') ? '#dcfce7' : '#fee2e2',
            px: 1,
            py: 0.5,
            borderRadius: '6px'
          }}>
            {trend}
          </Box>
        </Box>

        <div>
          <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 0.5, fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'var(--text-primary)' }}>
            {value}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default DashboardSummary;