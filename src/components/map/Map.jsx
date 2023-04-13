import React from "react";
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/map-marker';
import GoogleMapReact from "google-map-react";
import "./map.css";

// require('dotenv').config({path:"./.env"});
// console.log(process.env);

const LocationPin = ({ text }) => (
    <div className="pin">
        {/* <Icon icon={locationIcon} className="pin-icon" /> */}
        <p className="pin-text">{text}</p>
    </div>
)

const MapSection = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Bootcamp</h2>

        <div className="google-map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDla0Xevutuh3kKl3rehaQQtUhKRZPEPkE" }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            >
            <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
            />
            </GoogleMapReact>
        </div>
    </div>
);

export default MapSection;