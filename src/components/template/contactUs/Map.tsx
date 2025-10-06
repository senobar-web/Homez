import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';

type mapProps = {
  children: React.ReactNode;
};

export default function Map({children}: mapProps) {
  return (
    <>
      <MapContainer center={[35.8166634, 51.4666648]} zoom={13} scrollWheelZoom={true} className="h-[450px] w-full ">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.8166634, 51.4666648]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="md:pr-0 lg:pr-10 lg::-mt-[350px] lg:relative lg:z-[9999]">{children}</div>
    </>
  );
}
