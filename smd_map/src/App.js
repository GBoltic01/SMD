import ".//Styles/index.css"
import MyMap from "./Components/MyMap"
import ButtonAppBar from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import LocationList from "./Components/LocationList";
import LocationCard from "./Components/LocationCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Typography, Drawer, Grid, Fab } from '@mui/material/';
import { useState } from 'react'

function App() {

  const [drawerOpen, setDrawerOpen] = useState(true);
  const [mapRef, setMapRef] = useState(null)

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

              <SearchBar sx={{ overflow: 'auto' }} />
              <LocationList />
              <Typography ml={3} mb={2} variant="body2" onClick={()=> mapRef.setView([1,1], 6) }> MARIBOR </Typography>
              <LocationCard mapRef={mapRef}/>
            </Drawer>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" >
            <Fab edge='start' onClick={()=> setDrawerOpen(prevCheck => !prevCheck)} size="medium" sx={{zIndex:100000, mt:11, mr:-8}}>
              {drawerOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </Fab>
            <MyMap myRef={setMapRef}/>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default App;
