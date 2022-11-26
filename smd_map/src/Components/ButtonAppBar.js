import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Breadcrumbs, Link, Button } from '@mui/material';
import MediaQuery from 'react-responsive'

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
              <MediaQuery minWidth={616}>
                <Typography sx={{ color: "#536d97", display : 'inline-block', fontSize:{xs:'13px', sm:'16px'}}}> { title } </Typography>
              </MediaQuery>
              <MediaQuery maxWidth={615}>
                <Typography sx={{ color: "#536d97", display : 'inline-block', fontSize:'18px', fontWeight:'500'}}> SMD </Typography>
              </MediaQuery>
            </Box>
            <Box m={1}>
              <Button sx={{color: "gray", fontSize:{sm:'13px', md:'16px'}}} href="https://www.smd.si/" target="_blank">{ home } </Button>
            </Box>
          </Grid>
          <MediaQuery minWidth={616}>
            <Grid  container justifyContent="flex-end" item xs={2}>
              <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px", fontSize:{xs:'13px', md:'16px'}}} onClick={handleClickSlo}> SLO </Button> 
              <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px", fontSize:{xs:'13px', md:'16px'}}} onClick={handleClickEng}> ENG </Button>
            </Grid>
          </MediaQuery>
          <MediaQuery maxWidth={615}>
            <Grid  container justifyContent="flex-end" item xs={5}>
              <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px", fontSize:{xs:'13px', md:'16px'}}} onClick={handleClickSlo}> SLO </Button> 
              <Button sx={{color: "gray", maxWidth: '40px', minWidth:"40px", fontSize:{xs:'13px', md:'16px'}}} onClick={handleClickEng}> ENG </Button>
            </Grid>
          </MediaQuery>
        </Toolbar>
      </AppBar>
    </Box>
  );
}