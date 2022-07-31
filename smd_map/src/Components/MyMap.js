import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet"; 
import Markers from "../Components/Markers"

function MyMap({myRef}) {

  return(
    
    <MapContainer className="map"
      ref = {myRef}
      center = {[46.079, 14.717]}
      zoom = {9}
      zoomControl = {false}
      style = {{height:"100vh", width:"70%", position:"relative", zIndex:1}}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      <Markers />     
    </MapContainer>
  );
};
export default MyMap;