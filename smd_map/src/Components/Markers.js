import React, {useRef} from "react";
import ReactDOM from 'react-dom';
import { Marker, useMap, Tooltip } from "react-leaflet"; 
import lokacije from "../Data/lokacije.json"
import L from 'leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';


const locationMarker = new L.Icon({
    iconUrl: require("/home/gregor/Desktop/Projects/SMD/SMD/smd_map/src/Static/images/pin-dark-blue-01.png"),
    iconSize: [65, 65],     
    iconAnchor:  [32.5, 65]
});

function Markers({handleMarkerPressed }) {
    const map = useMap();
    
    return (
      
        lokacije.map(lokacije => {
            return (
              <Marker
                icon={locationMarker}
                key={lokacije.properties.id} 
                position={[lokacije.properties.y, lokacije.properties.x]}
                eventHandlers={{
                  click: () => {
                    map.setView([lokacije.properties.y, lokacije.properties.x], 16)
                    handleMarkerPressed(lokacije.properties.id)()
                  }
                }}>
                <Tooltip>{lokacije.properties.ime}</Tooltip>
              </Marker>
              )
        })
    )
}
export default Markers