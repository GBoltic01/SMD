import "/home/gregor/Desktop/Projects/SMD/SMD/smd_map/src/Styles/index.css";
import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet"; 
import Markers from "../Components/Markers"
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import L from 'leaflet';

function MyMap({myRef, handleMarkerPressed }) {

  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span class="clusterMarker">${cluster.getChildCount()}</span>`,
      iconSize: [0, 0],
      iconAnchor: [21, 21]
    });
  }

// CHANGE THE MAP WIDTH ON WINDOW RESIZE (100/70 => 1200 breakpoint)

// ADD EVENT HANDLER => ON MARKER CLICK OPEN BOTTOM DRAWER AND FOCUS ON SELECTED LOCATION / ISOLATE SELECTED LOCATION 

  return(
    
    <MapContainer className="map"
      ref = {myRef}
      center = {[46.120520, 14.815670]}
      zoom = {8}
      zoomControl = {false}
      style = {{height:"94vh", top:"6vh", width:"100%", position:"relative", zIndex:1}}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="topright" />
      <MarkerClusterGroup key={999} showCoverageOnHover={false} iconCreateFunction={createClusterCustomIcon}>
        <Markers handleMarkerPressed={handleMarkerPressed} /> 
      </MarkerClusterGroup>
    </MapContainer>
  );
};
export default MyMap;