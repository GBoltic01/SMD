import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Grid, Toolbar, Button, Fab } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import lokacije from "../Data/lokacije.json"

export default function LocationCard() {
  return (
    <Container>
      {lokacije.map(lokacija => (
          <Accordion key={lokacija.properties.id} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Toolbar>
                <Grid ml={-3}>
                  <Fab size="small">
                    <HomeIcon />
                  </Fab>
                </Grid>
                <Grid ml={2}>
                  <Grid container direction={'column'}>
                  <Typography> { lokacija.properties.ime } </Typography>
                  <Typography> { lokacija.properties.tip } | { lokacija.properties.naslov } </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb={2}> { lokacija.properties.opis } </Typography>
              <Grid container direction={'column'}>
                <Typography variant="body2"> KONTAKT </Typography>
                <Typography variant="body2" mb={2}> { lokacija.properties.tel_st }  |  { lokacija.properties.email } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2"> ČLANI </Typography>
                <Typography variant="body2" mb={2}> { lokacija.properties.clani } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2"> METODE </Typography>
                <Typography variant="body2" mb={2}> { lokacija.properties.metode } </Typography>
              </Grid>
              <Toolbar>
                <Grid>
                    <Button variant="contained">Zaposlitev</Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button variant="outlined">Spletna stran</Button>
                </Grid>
              </Toolbar>
            </AccordionDetails>
          </Accordion>  
      ))
      } 
    </Container>
    
  );
}