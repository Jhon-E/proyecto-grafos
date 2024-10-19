import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { LocationMarker } from "../LocationMarker";
import { CoordsContext } from "../../context/CoordProvider";
import { useContext, useState } from "react";
import { Clickable } from "../Clickable";
import { Loader } from "../Loader";

export const RenderMap = () => {
  const { c, start, end } = useContext(CoordsContext);

  // Manejar el caso en que c sea null o undefined
  if (!c || !c.lat || !c.lng) {
    return <Loader />;
  }

  return (
    <MapContainer
      center={{ lat: c.lat, lng: c.lng }}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
        border: "2px solid #333",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker coords={c} />
      {start.lat !== undefined && start.lng !== undefined ? (
        <LocationMarker coords={start} />
      ) : null}
      {end.lat !== undefined && end.lng !== undefined ? (
        <LocationMarker coords={end} />
      ) : null}
      <Clickable />
    </MapContainer>
  );
};
