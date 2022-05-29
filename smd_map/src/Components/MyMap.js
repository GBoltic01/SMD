import React from "react";
import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet"; 
import lokacije from "../Data/lokacije.json"



function MyMap() {
  const position = [46.079, 14.717]
  return(
    <MapContainer className="map"
      center = {position}
      zoom = {9}
      zoomControl = {false}
      style = {{height:"93.5vh", width:"100%"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright"></ZoomControl>
      {lokacije.map(lokacije => (
        <Marker key={lokacije.properties.id} position={[lokacije.properties.y, lokacije.properties.x]}></Marker>
      ))
      }

    </MapContainer>
  )
}

export default MyMap