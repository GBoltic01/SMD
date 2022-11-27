import ".//Styles/index.css";
import lokacije from "./Data/lokacije.json"
import MyMap from "./Components/MyMap";
import ButtonAppBar from "./Components/ButtonAppBar";
import SearchBar from "./Components/SearchBar";
import LocationList from "./Components/LocationList";
import LocationCard from "./Components/LocationCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Typography, Drawer, Grid, Fab } from '@mui/material/';
import { useState } from 'react';
import MediaQuery from 'react-responsive'
import SwipeableEdgeDrawer from "./Components/MobileDrawer";

function App() {
  // Handle the hide-show of side panel. Optional functionality
  const [drawerOpen, setDrawerOpen] = useState(true);

  // Handle map actions by clicks on components outside ma container
  const [mapRef, setMapRef] = useState(null);

  // State variables for ENG/SLO translations
  const [title, setTitle] = useState('SLOVENSKO MIKROBIOLOŠKO DRUŠTVO');
  const [home, setHome] = useState('Domov');
  const [translation, setTranslation] = useState(true);

  // ENG/SLO translation click handlers
  const handleClickEng = () => {
    setTitle('SLOVENIAN MICROBIOLOGICAL SOCIETY');
    setHome('Home');
    setTranslation(false);
  }

  const handleClickSlo = () => {
    setTitle('SLOVENSKO MIKROBIOLOŠKO DRUŠTVO');
    setHome('Domov');
    setTranslation(true);
  }

  const [selectedMarkerID, setSelectedMarkerID] = useState([]);
  const [expanded, setExpanded] = useState();

  const handleMarkerPressed = (id) => (event, isExpanded) => {

    setExpanded(isExpanded ? id : true);
    console.log(expanded)

    setSelectedMarkerID((prevState) =>
    prevState.includes(id)
      ? prevState.filter((markerID) => markerID !== id)
      : [id]
    )
  }

  return (
    <div className="App">
      <>
        <ButtonAppBar title={ title } home={ home } handleClickEng={handleClickEng} handleClickSlo={handleClickSlo}/>
        <Box sx={{flexGrow:1, height:"100vh", justifyContent:"center"}}>
          <Grid container direction="row">
            <MediaQuery minWidth={1200}>
              <Drawer 
                sx={{[`& .MuiDrawer-paper`]: { width: "30%", boxSizing: 'border-box', mt:9, height:"92%"}}}
                variant="persistent" 
                anchor="left" 
                open={drawerOpen} >
                {/* <SearchBar sx={{ overflow: 'auto' }} /> */}
                <LocationList 
                  containerStyle={{ position: 'relative' }}
                  translation = { translation } 
                />
                {/* <Typography ml={3} mb={2} variant="body2"> MARIBOR </Typography> */}
                <LocationCard 
                  selectedMarkerID={selectedMarkerID}
                  expanded={expanded}
                  handleMarkerPressed={handleMarkerPressed}
                  mapRef={ mapRef }
                  translation={ translation }
                  />
              </Drawer >
            </MediaQuery>
            <MediaQuery maxWidth={1201}>
              <SwipeableEdgeDrawer
                /* selectedMarkerID={selectedMarkerID}
                expanded={expanded}
                handleMarkerPressed={handleMarkerPressed}
                mapRef={ mapRef }
                translation={ translation } */
              />
            </MediaQuery>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" >
            {/*<Fab edge='start' onClick={()=> setDrawerOpen(prevCheck => !prevCheck)} size="medium" sx={{zIndex:100000, mt:11, mr:-8}}>
              {drawerOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </Fab>*/}
            <MediaQuery minWidth={1200}>
              <Fab edge='start' onClick={()=> mapRef.setView([46.079, 14.717], 8)} size="medium" sx={{zIndex:10, mt:11, mr:-8}}>
                <RestartAltIcon/>
              </Fab>
            </MediaQuery>
            <MediaQuery maxWidth={1201}>
              <Fab edge='start' onClick={()=> mapRef.setView([46.079, 14.717], 8)} size="small" sx={{zIndex:10, mt:8, mr:-6 }}>
                <RestartAltIcon />
              </Fab>
            </MediaQuery>
            <MyMap 
              myRef={setMapRef}
              handleMarkerPressed={handleMarkerPressed}/>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default App;
