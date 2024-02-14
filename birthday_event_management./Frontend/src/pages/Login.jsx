import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaUserNinja } from "react-icons/fa6";
import { jwtDecode } from 'jwt-decode';

const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        setErrorMessage('Please provide both email and password.');
        return;
      }

      const response = await fetch('http://localhost:8081/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.token; // Assuming the token is returned in the response
      const user = jwtDecode(token);
      console.log(user);
      localStorage.setItem('token', token);
      console.log(token);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="page-container login-cent">
      <Box
        className="login-container"
        component="form"
        noValidate
        onSubmit={handleLogin}
        sx={{ mt: 3 }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                padding: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'text.primary' }}>
                <FaUserNinja />
              </Avatar>
              <Typography component="h1" variant="h5" fontWeight="bold">
                LOGIN
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                >
                  <Link to={'/home'}>Sign in</Link>
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="https://www.gmail.com/" variant="body2">
                      {/* Forgot password? */}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/signup'} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </div>
  );
}
