import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ProfileDetails({ profile, onUpdate }) {
    const [status, setStatus] = useState({ type: '', message: '' });
    const [saving, setSaving] = useState(false);

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phone: ''
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setSaving(true);
            setStatus({ type: '', message: '' });
            const result = await onUpdate(values);
            setStatus({
                type: result.success ? 'success' : 'error',
                message: result.message
            });
            setSaving(false);
        },
    });

    useEffect(() => {
        if (profile) {
            formik.setValues({
                username: profile.username || '',
                email: profile.email || '',
                phone: profile.phone || ''
            });
        }
    }, [profile]);

    return (
        <Card sx={{ 
            p: 4, 
            borderRadius: '20px', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 4px 6px -1px var(--neutral-100)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <Typography variant="subtitle1" fontWeight="800" sx={{ color: 'var(--text-primary)', mb: 3 }}>
                Personal Information
            </Typography>

            {status.message && (
                <Alert severity={status.type} sx={{ mb: 3 }}>
                    {status.message}
                </Alert>
            )}

            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Box>
                        <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Name</Typography>
                        <TextField 
                            name="username"
                            fullWidth 
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            size="small"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</Typography>
                        <TextField 
                            name="email"
                            fullWidth 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            size="small"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="caption" fontWeight="700" sx={{ color: 'var(--text-secondary)', mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</Typography>
                        <TextField 
                            name="phone"
                            fullWidth 
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            size="small"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                        />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Button 
                            type="submit"
                            fullWidth
                            disabled={saving}
                            variant="contained" 
                            sx={{ 
                                borderRadius: '10px', 
                                py: 1.5,
                                bgcolor: 'black',
                                textTransform: 'none',
                                fontWeight: 700,
                                boxShadow: '0 4px 6px -1px var(--primary-100)',
                                '&:hover': { bgcolor: '', transform: 'translateY(-1px)' },
                                transition: 'all 0.2s'
                            }}
                        >
                            {saving ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </Box>
                </Box>
            </form>
        </Card>
    );
}

export default ProfileDetails;
