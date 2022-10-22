import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Breadcrumbs, Link, Button } from '@mui/material';

export default function ButtonAppBar({title, home, handleClickEng, handleClickSlo}) {

  return (
    <Box position="relative" sx={{ flexGrow: 1, zIndex: 10}}>
      <AppBar>
        <Toolbar sx={{ backgroundColor:"white" }}>
            <Grid container spacing={0.5} item xs={10} alignItems="center" direction="row">
              <Box m={1}> 
                <Box component="img" sx={{height:50, width:50}} src={require("/home/gregor/Desktop/Projects/SMD/SMD/smd_map/src/Static/images/smd-logo-01.png")} />
              </Box>
              <Box m={1}>
                <Typography sx={{ color: "#536d97", display : 'inline-block'}}> { title } </Typography>
              </Box>
              <Box m={1}>
                <Button sx={{color: "gray"}} href="https://www.smd.si/" target="_blank">{ home } </Button>
              </Box>
              <Box m={1}>
                {/* <Typography sx={{color: "gray"}} >Lokacije</Typography> */}
              </Box>
            </Grid>
            <Grid  container justifyContent="flex-end" item xs={2}>
            
                <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px"}} onClick={handleClickSlo}> SLO </Button> 
                <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px"}} onClick={handleClickEng}> ENG </Button>
        
            </Grid>

        </Toolbar>
      </AppBar>
    </Box>
  );
}