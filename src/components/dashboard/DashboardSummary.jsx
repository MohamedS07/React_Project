import { Grid, Card, Typography, Box } from "@mui/material";

function DashboardSummary({ title, value, icon, trend }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{
        borderRadius: '16px',
        height: 120,
        minWidth: '220px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: '24px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid #f1f5f9'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{
            width: '32px',
            height: '32px',
            background: '#f8fafc',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b'
          }}>
            {icon}
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: trend?.startsWith('+') ? '#10b981' : '#ef4444',
            fontSize: '12px',
            fontWeight: 600
          }}>
            {trend}
          </Box>
        </Box>

        <div>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5, fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
            {value}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default DashboardSummary;