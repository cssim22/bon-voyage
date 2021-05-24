import React, { useState, useEffect, Component } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


class  Markers extends Component {
render() {
  const markerArray = [];

  const locations = ['tokyo', 'san francisco', 'paris', 'new york']

  locations.forEach(element => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${element}&key=AIzaSyA4ASEqYx1KR_ivk3v1kntziAPUi1Z3qek`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.results[0].geometry.location)
        markerArray.push(<Marker position={data.results[0].geometry.location}/>)
      })
})  
  // console.log('props',props)
  return <Marker position={{lat: 35.6761919, lng: 139.6503106}} />;
}
}

export default Markers;