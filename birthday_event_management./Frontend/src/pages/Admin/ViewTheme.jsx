import React from 'react';
import CustomSideNav from './Sidenav';
import { Card, CardContent, Button, Typography } from '@mui/material';

const ViewThemes = () => {
  return (

    <div>
      <div>
        <div>
          <CustomSideNav/>
        </div>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <Card>
          <CardContent>
            <Typography variant="h5">2D 3D Theme</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-03-15</Typography>
            <Typography variant="body2">Menu: Appetizers, Main Course, Desserts</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5">Superhero Theme</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-03-20</Typography>
            <Typography variant="body2">Menu: Drinks, Snacks</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5">Under the Sea</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-03-25</Typography>
            <Typography variant="body2">Menu: Buffet</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5">Retro</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-04-01</Typography>
            <Typography variant="body2">Menu: Italian Cuisine</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5">Anime</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-04-10</Typography>
            <Typography variant="body2">Menu: Mexican Fiesta</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5">Vintage</Typography>
            <Typography variant="subtitle1" color="textSecondary">Date: 2024-04-15</Typography>
            <Typography variant="body2">Menu: BBQ Night</Typography>
            <Button variant="contained" color="primary">Edit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default ViewThemes;
