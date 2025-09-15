import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginRes = await axios.post('http://localhost:5000/users/login', { username, password });
            login(loginRes.data.token, loginRes.data.user);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus value={username} onChange={(e) => setUsername(e.target.value)} />
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && (<Typography color="error" variant="body2" align="center">{error}</Typography>)}
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}
