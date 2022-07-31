import React, {useRef} from "react";
import { Marker, useMap, Tooltip } from "react-leaflet"; 
import lokacije from "../Data/lokacije.json"

function Markers() {
    const map = useMap();

    return (
        lokacije.map(lokacije => {
            return (
                <Marker
                key={lokacije.properties.id} 
                position={[lokacije.properties.y, lokacije.properties.x]}
                eventHandlers={{
                  click: () => {
                    map.setView([lokacije.properties.y, lokacije.properties.x], 16)
                  }
                }}>
                    <Tooltip>{lokacije.properties.ime}</Tooltip>
                </Marker>
              )
        })
    )
}
export default Markers