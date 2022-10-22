import ".//Styles/index.css";
import lokacije from "./Data/lokacije.json"
import MyMap from "./Components/MyMap";
import ButtonAppBar from "./Components/ButtonAppBar";
import SearchBar from "./Components/SearchBar";
import LocationList from "./Components/LocationList";
import LocationCard from "./Components/LocationCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Typography, Drawer, Grid, Fab } from '@mui/material/';
import { useState } from 'react';

function App() {
  // Handle the hide-show of side panel. Optional functionality
  const [drawerOpen, setDrawerOpen] = useState(true);
  // Handle map actions by clicks on components outside ma container
  const [mapRef, setMapRef] = useState(null);

  // State variables for ENG/SLO translations
  const [title, setTitle] = useState('SLOVENSKO MIKROBIOLOŠKO DRUŠTVO');
  const [home, setHome] = useState('Domov');
  const [name, setName] = useState(true);
  const [descr, setDescr] = useState(true);
  const [competencies, setCompetencies] = useState(true);
  const [research, setResearch] = useState(true);
  const [microorganisms, setMicroorganisms] = useState(true);
  const [researchField, setResearchField] = useState(true);
  const [employees, setEmployees] = useState(true);
  const [website, setWebsite] = useState(true);
  const [contact, setContact] = useState(true);



  // ENG/SLO translation click handlers
  const handleClickEng = () => {
    setTitle('SLOVENIAN MICROBIOLOGY SOCIETY');
    setHome('Home');
    setName(false);
    setDescr(false);
    setCompetencies(false);
    setResearch(false);
    setMicroorganisms(false);
    setResearchField(false);
    setEmployees(false);
    setWebsite(false);
    setContact(false);
  }

  const handleClickSlo = () => {
    setTitle('SLOVENSKO MIKROBIOLOŠKO DRUŠTVO');
    setHome('Domov');
    setName(true);
    setDescr(true);
    setCompetencies(true);
    setResearch(true);
    setMicroorganisms(true);
    setResearchField(true);
    setEmployees(true);
    setWebsite(true);
    setContact(true);
  }

  return (
    <div className="App">
      <>
        <ButtonAppBar title={ title } home={ home } handleClickEng={handleClickEng} handleClickSlo={handleClickSlo}/>
        <Box sx={{flexGrow:1, height:"100vh", justifyContent:"center"}}>
          <Grid container direction="row">
            <Drawer 
              sx={{[`& .MuiDrawer-paper`]: { width: "30%", boxSizing: 'border-box', mt:9, height:"92%"}}}
              variant="persistent" 
              anchor="left" 
              open={drawerOpen} >

              {/* <SearchBar sx={{ overflow: 'auto' }} /> */}
              <LocationList 
                containerStyle={{ position: 'relative' }}
                name = { name } 
                />
              {/* <Typography ml={3} mb={2} variant="body2"> MARIBOR </Typography> */}
              <LocationCard 
                mapRef={ mapRef }
                name={ name }
                descr = { descr }
                competencies = { competencies }
                research = { research } 
                microorganisms = { microorganisms }
                researchField = { researchField }
                employees = { employees }
                website = { website }
                contact = { contact }
                />
            </Drawer>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" >
            {/*<Fab edge='start' onClick={()=> setDrawerOpen(prevCheck => !prevCheck)} size="medium" sx={{zIndex:100000, mt:11, mr:-8}}>
              {drawerOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </Fab>*/}
            <MyMap myRef={setMapRef}/>
          </Grid>
        </Box>
      </>
    </div>
  );
}

export default App;
