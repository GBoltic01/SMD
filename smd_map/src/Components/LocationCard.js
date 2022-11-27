import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Grid, Toolbar, Button, Fab } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import lokacije from "../Data/lokacije.json"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';
import { fontSize } from '@mui/system';

export default function LocationCard({mapRef, translation, selectedMarkerID, handleMarkerPressed}) {

  return (
      <Container>
        {lokacije.map(lokacija => (
          <Accordion 
            key={lokacija.properties.id}
            expanded={selectedMarkerID.includes(lokacija.properties.id)}
            onChange={handleMarkerPressed(lokacija.properties.id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Toolbar>
                <Grid ml={-3}>
                  <Fab size="small" onClick={()=> mapRef.setView([lokacija.properties.y, lokacija.properties.x], 17)}>
                    <LocationOnIcon />
                  </Fab>
                </Grid>
                <Grid ml={2}>
                  <Grid container direction={'column'}>
                  <Typography sx={{color:"#575757", fontSize:{md:'15px', lg:'18px'}}}> { translation ? lokacija.properties.ime : lokacija.properties.ime_ang } </Typography>
                  <Typography sx={{color:"#575757", fontSize:{md:'13px', lg:'16px'}}}> { lokacija.properties.naslov } </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb={2} variant="body2"> { translation ? lokacija.properties.opis : lokacija.properties.opis_ang } </Typography>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757"}}> {translation ? "METODOLOŠKE KOMPETENCE" : "METHODOLOGICAL COMPETENCIES" } </Typography>
                <Typography variant="body2" mb={2}> { translation ? lokacija.properties.metodoloske_kompetence : lokacija.properties.metodoloske_kompetence_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {translation ? "RAZISKOVALNO DELO" : "RESEARCH AREAS" }</Typography>
                <Typography variant="body2" mb={2}> { translation ? lokacija.properties.raziskovalno_delo : lokacija.properties.raziskovalno_delo_ang }</Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {translation ? "PODROČJE DELOVANJA/MIKROORGANIZMI" : "FIELD OF WORK/MICROORGANISMS"} </Typography>
                <Typography variant="body2" mb={2}> { translation ? lokacija.properties.podrocje_delovanja_mikroorganizmi : lokacija.properties.podrocje_delovanja_mikroorganizmi_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {translation ? "PODROČJE DELOVANJA" : "FIELD OF WORK"}  </Typography>
                <Typography variant="body2" mb={2}> { translation ? lokacija.properties.podrocje_delovanja : lokacija.properties.podrocje_delovanja_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {translation ? "ŠTEVILO ZAPOSLENIH" : "NUBER OF EMPLOYEES"} </Typography>
                <Typography variant="body2" mb={2}> { translation ? lokacija.properties.stevilo_zaposlenih : lokacija.properties.stevilo_zaposlenih_ang } </Typography>
              </Grid>
              <Toolbar>
                <Grid container justifyContent="flex-start">
                    <Button variant="contained" href={lokacija.properties.spletna_stran} target="_blank">{ translation ? "Spletna stran" : "Website" }</Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button variant="outlined" href={lokacija.properties.kontakt} target="_blank">{ translation ? "Kontakt" : "Contact" }</Button>
                </Grid>
              </Toolbar>
            </AccordionDetails>
          </Accordion>  
        ))
        } 
      </Container>
  );
}