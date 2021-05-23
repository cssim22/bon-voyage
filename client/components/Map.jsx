import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TripModal from './TripModal.jsx';
import Modal from 'react-modal';


function Map() {


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function openPinModal() {
  setPinIsOpen(true);
}

function closePinModal() {
  setPinIsOpen(false);
}

const [pinModalIsOpen, setPinIsOpen] = useState(false);

  return (

    <LoadScript
      googleMapsApiKey="AIzaSyA4ASEqYx1KR_ivk3v1kntziAPUi1Z3qek"
    >
      <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      <Marker position={center} onClick={openPinModal}/>
      <Modal
          isOpen={pinModalIsOpen}
          onRequestClose={closePinModal}
          contentLabel='Modal to view existing pins'
          >
            <TripModal  />
          </Modal>
      </GoogleMap>
      </div>
    </LoadScript>

  )
}

export default React.memo(Map)