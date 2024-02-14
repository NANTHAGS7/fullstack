import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RiSecurePaymentLine } from "react-icons/ri";
import Cust_navbar from '../components/Navbar';

const defaultTheme = createTheme();

export default function Payment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <Cust_navbar />
      <Box 
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
                padding: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'text.primary' }}>
                <RiSecurePaymentLine />
              </Avatar>
              <Typography component="h1" variant="h5" fontWeight="bold">
                EVENT REGISTRATION
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Name"
                  label="Name"
                  type="text"
                  id="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Event Theme"
                  label="Event Theme"
                  type="text"
                  id="event-theme"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Budget"
                  label="Budget"
                  type="number"
                  id="budget"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Date"
                  label="Date"
                  type="date"
                  id="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Number of People"
                  label="Number of People"
                  type="number"
                  id="number-of-people"
                />
                Cash
                <br></br>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Online Mode"
                  name="onlineMode"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Offline Mode"
                  name="offlineMode"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enroll
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </div>
  );
}
