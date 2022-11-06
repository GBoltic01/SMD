import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Grid, Toolbar, Button, Fab } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import lokacije from "../Data/lokacije.json"

export default function LocationCard({mapRef, name, descr, 
                                      competencies, research, microorganisms, researchField, employees, website, contact, 
                                      selectedMarkerID, expanded, handleMarkerPressed}) {

  return (
    <Container>
      {lokacije.map(lokacija => (
          <Accordion 
            key={lokacija.properties.id}
            expanded={selectedMarkerID.includes(lokacija.properties.id)}
            onChange={handleMarkerPressed(lokacija.properties.id)} 

            /* expanded={expanded === lokacija.properties.id} 
            onChange={handleChange(lokacija.properties.id)} */
            >
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
                  <Typography sx={{color:"#575757"}}> { name ? lokacija.properties.ime : lokacija.properties.ime_ang } </Typography>
                  <Typography sx={{color:"#575757"}} variant="body2"> { lokacija.properties.naslov } </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb={2} variant="body2"> { descr ? lokacija.properties.opis : lokacija.properties.opis_ang } </Typography>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757"}}> {competencies ? "METODOLOŠKE KOMPETENCE" : "METHODOLOGICAL COMPETENCIES" } </Typography>
                <Typography variant="body2" mb={2}> { competencies ? lokacija.properties.metodoloske_kompetence : lokacija.properties.metodoloske_kompetence_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {research ? "RAZISKOVALNO DELO" : "RESEARCH AREAS" }</Typography>
                <Typography variant="body2" mb={2}> { research ? lokacija.properties.raziskovalno_delo : lokacija.properties.raziskovalno_delo_ang }</Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {microorganisms ? "PODROČJE DELOVANJA/MIKROORGANIZMI" : "FIELD OF WORK/MICROORGANISMS"} </Typography>
                <Typography variant="body2" mb={2}> { microorganisms ? lokacija.properties.podrocje_delovanja_mikroorganizmi : lokacija.properties.podrocje_delovanja_mikroorganizmi_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {researchField ? "PODROČJE DELOVANJA" : "FIELD OF WORK"}  </Typography>
                <Typography variant="body2" mb={2}> { researchField ? lokacija.properties.podrocje_delovanja : lokacija.properties.podrocje_delovanja_ang } </Typography>
              </Grid>
              <Grid container direction={'column'}>
                <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> {employees ? "ŠTEVILO ZAPOSLENIH" : "NUBER OF EMPLOYEES"} </Typography>
                <Typography variant="body2" mb={2}> { employees ? lokacija.properties.stevilo_zaposlenih : lokacija.properties.stevilo_zaposlenih_ang } </Typography>
              </Grid>
              <Toolbar>
                <Grid container justifyContent="flex-start">
                    <Button variant="contained" href="https://www.nlzoh.si" target="_blank">{ website ? "Spletna stran" : "Website" }</Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button variant="outlined" href="https://www.nlzoh.si/kontakti-in-lokacije/#Maribor" target="_blank">{ contact ? "Kontakt" : "Contact" }</Button>
                </Grid>
              </Toolbar>
            </AccordionDetails>
          </Accordion>  
      ))
      } 
    </Container>
    
  );
}