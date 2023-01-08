import React from "react";
import { List, ListItem, Divider, ListItemText, Grid } from "@mui/material";
import lokacije from "../Data/lokacije.json"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';


function MobileListItem({ handleClickDetails }) {

  return(
    <>
      {lokacije.map(lokacija => (
        <List key={lokacija.properties.id} component="nav" aria-label="mailbox folders">
          <Grid container direction="row" justifyContent="center" alignItems="center"  >
            <Grid xs={10} >
              <ListItem>
                <ListItemText primary={ lokacija.properties.ime } secondary={ lokacija.properties.naslov } />
              </ListItem>
            </Grid>
            <Grid xs={2}>
              <IconButton  sx={{float:"right"}} onClick={handleClickDetails}>
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </List>
      ))}
    </>
  )
}

export default MobileListItem;