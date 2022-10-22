import * as React from 'react';
import { Toolbar, Grid, Typography, Chip } from '@mui/material/';

export default function LocationList({name}) {
  return (
    <Toolbar>
        <Grid>
            <Typography variant="subtitle1" sx={{fontWeight:"500", color:"gray"}}> {name ? "LOKACIJE" : "LOCATIONS"} </Typography>
        </Grid>
        <Grid container justifyContent="flex-end">
            {/* <Chip sx={{ backgroundColor:'white' }} label="Sortiraj po: Mesto" /> */}
        </Grid>
    </Toolbar>
  );
}
