import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { IconButton, Grid, Divider, Typography, Button, Box } from "@mui/material";
import React from "react";



function MobileItemDetails({ handleClickDetails }) {

  return(
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" >
        <Grid xs={2}>
          <IconButton  sx={{float:"left"}} onClick={handleClickDetails}>
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid xs={10} >
          <Typography> Nacionalni Laboratorij za Okolje in Hrano </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Box m={2}>
        <Typography mb={2} variant="body2"> Inštitut za mikrobiologijo in imunologijo Medicinske fakultete Univerze v Ljubljani (IMI MF UL) je osrednja, največja slovenska ustanova za mikrobiološko in imunološko strokovno zdravstveno, raziskovalno in pedagoško dejavnost. V sodelovanju z Univerzitetnim kliničnim centrom v Ljubljani, Onkološkim inštitutom v Ljubljani in drugimi zdravstvenimi ustanovami v Sloveniji razvija ter povezuje temeljno in klinično mikrobiologijo in imunologijo. </Typography>
        <Grid container direction={'column'}>
          <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757"}}> METODOLOŠKE KOMPETENCE </Typography>
          <Typography variant="body2" mb={2}> Humana medicinska mikrobiologija | Mikrobiološko testiranje hrane, vod in predmetov splošne rabe</Typography>
        </Grid>
        <Grid container direction={'column'}>
          <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> RAZISKOVALNO DELO </Typography>
          <Typography variant="body2" mb={2}> Drugo raziskovalno delo</Typography>
        </Grid>
        <Grid container direction={'column'}>
          <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> PODROČJE DELOVANJA/MIKROORGANIZMI </Typography>
          <Typography variant="body2" mb={2}> Bakterije | Glive | Virusi | Paraziti </Typography>
        </Grid>
        <Grid container direction={'column'}>
          <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> PODROČJE DELOVANJA </Typography>
          <Typography variant="body2" mb={2}> Medicinska | Sanitarna </Typography>
        </Grid>
        <Grid container direction={'column'}>
          <Typography variant="body2" sx={{fontWeight:"bold", color:"#575757" }}> ŠTEVILO ZAPOSLENIH </Typography>
          <Typography variant="body2" mb={2}> Več kot 10 </Typography>
        </Grid>
        <Grid container direction={'row'}>
            <Button variant="contained" href="https://www.nlzoh.si/" target="_blank" sx={{margin:1}}> SPLETNA STRAN </Button>
            <Button variant="outlined" href="https://www.nlzoh.si/" target="_blank" sx={{margin:1}}> KONTAKT </Button>
        </Grid>
      </Box>
    </>
  )
}

export default MobileItemDetails;