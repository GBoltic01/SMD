import * as React from 'react';
import { Box, TextField, Toolbar, Fab, Grid, Divider} from '@mui/material/';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function CollapseSidepanelButton() {
  return (
        <Fab size="medium">
          <FilterListIcon fontSize="medium" />
        </Fab>
  );
}