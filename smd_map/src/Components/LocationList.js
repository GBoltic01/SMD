import * as React from 'react';
import { Toolbar, Grid, Typography, Chip } from '@mui/material/';

export default function LocationList() {
  return (
    <Toolbar>
        <Grid>
            <Typography variant="subtitle1">
                Lokacije
            </Typography>
        </Grid>
        <Grid container justifyContent="flex-end">
            <Chip sx={{ backgroundColor:'white' }} onClick="" label="Sortiraj po: Mesto" />
        </Grid>
    </Toolbar>
  );
}
