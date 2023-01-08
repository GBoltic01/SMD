import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MobileDrawerList from './MobileDrawerList';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));


function SwipeableEdgeDrawer({selectedMarkerID, expanded, handleMarkerPressed, mapRef, translation, openDrawerOnClick, setOpenDrawerOnClick}) {
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    console.log(newOpen)
  };
  
    return (
    <Root>
      <CssBaseline />
      <Global
      styles={{
        '.MuiDrawer-root > .MuiPaper-root': {
        height: `calc( 100% - ${drawerBleeding}px)`,
        overflow: 'visible',
        },
        }}
        />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
      <StyledBox
        sx={{
        position: 'absolute',
        top: -drawerBleeding,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: 'visible',
        right: 0,
        left: 0,
        }}
        >
        <Puller />
        <Typography sx={{ p: 2, color: 'text.secondary' }}>Lokacije</Typography>
        </StyledBox>
          <Box sx={{maxHeight: '100%', overflow: 'auto', mt:2}} >
            <MobileDrawerList translation={translation} />
               {/* <LocationCard
                    selectedMarkerID={selectedMarkerID}
                    expanded={expanded}
                    handleMarkerPressed={handleMarkerPressed}
                    mapRef={ mapRef }
                    translation={ translation }
                /> */}
          </Box>
      </SwipeableDrawer>
    </Root>
    );
}


export default SwipeableEdgeDrawer;