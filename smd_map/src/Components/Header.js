import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Breadcrumbs } from '@mui/material';

export default function ButtonAppBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor:"white" }}>
            <Grid container spacing={0.5} item xs={10}>
              <Box m={1}>
              <Typography sx={{ color: "#4466CC"}}> SLOVENSKO MIKROBIOLOŠKO DRUŠTVO </Typography>
              </Box>
              <Box m={1}>
                <Typography sx={{color: "gray"}} >Domov </Typography>
              </Box>
              <Box m={1}>
                <Typography sx={{color: "gray"}} >Lokacije</Typography>
              </Box>
            </Grid>
            <Grid  container justifyContent="flex-end" item xs={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography underline="hover" sx={{color: "black"}}> SLO </Typography >
                <Typography underline="hover" sx={{color: "gray"}}> ENG </Typography >
              </Breadcrumbs>
            </Grid>

        </Toolbar>
      </AppBar>
    </Box>
  );
}