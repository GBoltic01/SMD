import * as React from 'react';
import { Box, TextField, Toolbar, Fab, Grid, Divider} from '@mui/material/';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function SearchBar() {
  return (
    <Toolbar>
      <Grid>
        <TextField size="small" id="outlined-basic" label="Išči..." variant="outlined" />
      </Grid>
      <Grid container justifyContent="flex-end">
        <Fab size="small">
          <FilterListIcon fontSize="small" />
        </Fab>
      </Grid>
    </Toolbar>
  );
}
