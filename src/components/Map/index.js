import React, { useEffect, useState } from "react";
import { Marker, TileLayer, useMapEvents, Circle } from "react-leaflet";
import "./index.scss";
const Map = ({ userLocation, setUserLocation, clickedPosition, setClickPosition }) => {
	const mapEvents = useMapEvents({
		click: (e) => {
			setClickPosition(e.latlng);
		},
		locationfound(e) {
			setUserLocation(e.latlng);
			mapEvents.flyTo(e.latlng);
		},
		locationerror(e) {
			console.log(e);
		},
	});
	useEffect(() => {
		mapEvents.locate();
	}, [mapEvents]);

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{clickedPosition ? <Marker position={clickedPosition}></Marker> : null}
			<Circle weight={20} lineCap={1} center={userLocation}>
				<Circle weight={10} center={userLocation} />
			</Circle>
		</>
	);
};

export default Map;
