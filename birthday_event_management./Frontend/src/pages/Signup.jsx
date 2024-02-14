import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import CheckIcon from '@mui/icons-material/Check';
import '../assets/css/index.css';

const defaultTheme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to sign up');
      } 
      // Navigate to the login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setErrorMessage('Failed to sign up. Please try again later.');
    }
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({
      ...formData,
      password: val
    });
    if (val.length < 6) {
      setPasswordStrength('Weak');
    } else if (val.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const val = e.target.value;
    setFormData({
      ...formData,
      confirmPassword: val
    });
    setPasswordMatch(val === formData.password);
  };

  return (
    <div className="page-container signup-cent">
      <Box className="signup-container" component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
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
                <FaUserShield />
              </Avatar>
              <Typography component="h1" variant="h5" fontWeight="bold">
                SIGN UP
              </Typography>
              <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="userType"
                      select
                      label="User Type"
                      fullWidth
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="First Name"
                      autoFocus
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handlePasswordChange}
                    />
                    {passwordStrength && (
                      <Typography variant="caption" color="textSecondary">
                        Password Strength: {passwordStrength}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      error={!passwordMatch}
                      helperText={!passwordMatch && "Passwords do not match"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobileNumber"
                      label="Mobile Number"
                      name="mobileNumber"
                      autoComplete="tel"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSignup}>
                 <Link to={'/login'}>  </Link>Sign Up
                </Button>
                <br />
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to={'/login'} variant="body2">
                      Already have an account? Sign in
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
