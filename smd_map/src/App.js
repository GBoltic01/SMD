import ".//Styles/index.css"
import MyMap from "./Components/MyMap"
import ButtonAppBar from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import LocationList from "./Components/LocationList";
import LocationCard from "./Components/LocationCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Divider, Typography, Drawer, IconButton, Grid, Fab } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';


function App() {

  const [drawerOpen, setDrawerOpen] = useState(true)

  return (
    <div className="App">
      <>
        <ButtonAppBar/>
        <Box sx={{flexGrow:1}}>
          <Grid container direction="row" justifyContent="flex-start" >
            <Drawer 
              sx={{[`& .MuiDrawer-paper`]: { width: "30%", boxSizing: 'border-box' },}}
              variant="persistent" 
              anchor="left" 
              open={drawerOpen} >

              <SearchBar sx={{ overflow: 'auto' }}/>
              <LocationList />
              <Typography ml={3} mb={2} variant="body2"> MARIBOR </Typography>
              <LocationCard />
            </Drawer>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" >
            <Fab edge='start' onClick={()=> setDrawerOpen(prevCheck => !prevCheck)} size="medium" sx={{zIndex:100000, mt:11, mr:-8}}>
              {drawerOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </Fab>
            <MyMap/>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default App;
