import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Link,useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import React from 'react';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import '../assets/css/index.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      Time2Vibe
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [selectedUserType, setSelectedUserType] = React.useState('');
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userType: selectedUserType,
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      username: data.get('username'),
      mobileNumber: data.get('mobileNumber'),
      password: data.get('password'),
    });
    setShowSuccessAlert(true);
    setTimeout(() => {
      history.push('/Login');
    }, 3000);
  };

  return (
    <div className="page-container signup-cent">
    <Box
    className="signup-container"  
  component="form"
  noValidate
  onSubmit={handleSubmit}
  sx={{ mt: 3 }}
    >
    <ThemeProvider theme={defaultTheme}>
      
      <Container component="main" maxWidth="xs">
      
        <CssBaseline />
        <Box
          sx={{
            padding:'5%',
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} >
                <TextField
                  id="userType"
                  select
                  label="User Type"
                  fullWidth
                  name="userType"
                  value={selectedUserType}
                  onChange={(e) => setSelectedUserType(e.target.value)}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </TextField>
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid> 

            {showSuccessAlert && (
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                sx={{ mt: 2 }}
              >
                Account successfully created! Redirecting to login page...
              </Alert>
            )}
            <Link to={'/home'}>
              <Button
              // color="cyan"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Link>
            <br></br>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </Box>
    </div>
  );
}
