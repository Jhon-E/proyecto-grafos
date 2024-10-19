import { useMapEvents, Marker, Popup } from "react-leaflet";

export const LocationMarker = ({ coords }) => {
  return coords === null ? null : (
    <Marker position={coords}>
      <Popup>ESTAS AQUÍ</Popup>
    </Marker>
  );
};
