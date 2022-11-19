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

  return(
    
    <MapContainer className="map"
      ref = {myRef}
      center = {[46.120520, 14.815670]}
      zoom = {9}
      zoomControl = {false}
      style = {{height:"100vh", width:"70%", position:"relative", zIndex:1}}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      <MarkerClusterGroup key={999} showCoverageOnHover={false} iconCreateFunction={createClusterCustomIcon}>
        <Markers handleMarkerPressed={handleMarkerPressed} /> 
      </MarkerClusterGroup>
    </MapContainer>
  );
};
export default MyMap;