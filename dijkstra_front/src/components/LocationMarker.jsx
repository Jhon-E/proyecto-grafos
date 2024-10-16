import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

export const LocationMarker = ({ coords }) => {

  console.log("Se creó un marcador", coords.lat);

  return coords === null ? null : (
    <Marker position={coords}>
      <Popup>ESTAS AQUÍ</Popup>
    </Marker>
  );
};
