import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Container, Grid, Toolbar, Button, Fab } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';

export default function LocationCard() {
  return (
    <Container>
      <Accordion>
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
              <Typography> Organizacija 1 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada faucibus parturient vitae. Congue non volutpat mauris scelerisque. 
          Quam ac in nisl felis semper ac, sed tincidunt condimentum. Nulla adipiscing odio dolor nisl. Pretium velit elit nam neque. Tempor
          </Typography>
          <Grid container direction={'column'}>
            <Typography variant="body2"> KONTAKT </Typography>
            <Typography variant="body2" mb={2}> 040686545  |  smd@email.si </Typography>
          </Grid>
          <Grid container direction={'column'}>
            <Typography variant="body2"> ČLANI </Typography>
            <Typography variant="body2" mb={2}> Gorazd Vodopivec  |  Polona Gozdar  |  Vesna Franko </Typography>
          </Grid>
          <Grid container direction={'column'}>
            <Typography variant="body2"> METODE </Typography>
            <Typography variant="body2" mb={2}> Mikrobiološka metoda  |  Kemijsko biološka metoda  |  Tretja metoda </Typography>
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


      <Accordion>
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
              <Typography> Organizacija 2 </Typography>
              <Typography> Fakulteta  |  Valvasorjeva ulica 12, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 3 </Typography>
              <Typography> Privat  |  Plečnikova 45, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 4 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 1 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 1 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 1 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
              <Typography> Organizacija 1 </Typography>
              <Typography> Fakulteta  |  Maistrova ulica 69, 2000 Maribor</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
    
  );
}