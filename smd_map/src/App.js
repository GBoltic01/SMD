import ".//Styles/index.css"
import MyMap from "./Components/MyMap"
import ButtonAppBar from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import LocationList from "./Components/LocationList";
import LocationCard from "./Components/LocationCard";
import CollapseSidepanelButton from "./Components/CollapseSidepanelButton"
import {Box, Divider, Typography, Grid} from '@mui/material/';

function App() {

  return (
    <div className="App">
      <ButtonAppBar />
      <Divider />
      <Box  sx={{ width:'30%', height:'93%', backgroundColor:'#f5f5f5', overflow: 'auto', position:'absolute', zIndex:10000 }}>
        <SearchBar />
        <LocationList />
        <Typography ml={3} mb={2} variant="body2"> MARIBOR </Typography>  
        <LocationCard />
      </Box>
      <MyMap />
    </div>
  );
}

export default App;
