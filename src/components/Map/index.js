import React, { useEffect, useState } from "react";
import { Marker, TileLayer, MapContainer, useMapEvents } from "react-leaflet";
import "./index.scss";
const Map = ({
  clickedPosition,
  setClickedPosition,
  userLocation,
  setUserLocation,
}) => {
  const mapEvents = useMapEvents({
    click: (e) => {
      setClickedPosition(e.latlng);
    },
    locationfound(e) {
      setUserLocation(e.latlng);
      mapEvents.flyTo(e.latlng);
    },
  });
  useEffect(() => {
    mapEvents.locate();
  }, [mapEvents]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={clickedPosition}></Marker>
    </>
  );
};

export default Map;