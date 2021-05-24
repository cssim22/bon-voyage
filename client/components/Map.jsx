import React, { useState, Component, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TripModal from './TripModal.jsx';
import Modal from 'react-modal';


function Map(props) {

// const markerArray = [];

const [markerArray, updateMarkerArray] = useState([]);
const tempArray = [];

const locations = ['tokyo', 'san francisco', 'paris', 'new york', 'cancun']
// // if (props.tripData.length > 0) {
// //   props.tripData.forEach(obj => {
// //     console.log(obj.location);
// //   })
// // }



// console.log('outside of promise', markerArray)

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


useEffect(() => {
  for (let i = 0; i < locations.length; i++) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${locations[i]}&key=AIzaSyA4ASEqYx1KR_ivk3v1kntziAPUi1Z3qek`)
      .then(res => res.json())
      .then((data) => {
        tempArray.push(<Marker position={data.results[0].geometry.location} key={location[i]} onClick={openPinModal}/>);
        updateMarkerArray(oldArray => [...oldArray, tempArray]);
        if (markerArray.length === locations.length) return markerArray;
      })
  }}, [])

  return (

    <LoadScript
      googleMapsApiKey="AIzaSyA4ASEqYx1KR_ivk3v1kntziAPUi1Z3qek"
    >
      <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
      <Marker position={center} onClick={openPinModal}/>
      {markerArray}
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

export default Map