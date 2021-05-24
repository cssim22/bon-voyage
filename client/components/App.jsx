import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TripModal from './TripModal.jsx';
import NewTripModal from './NewTripModal.jsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useFetch } from "react-async"
import Map from './Map.jsx'
// import { BrowserRouter as Router } from 'react-router-dom';

Modal.setAppElement('#root');

function App() {
  // pull in state using useState
  const [pinModalIsOpen, setPinIsOpen] = useState(false);

  const [newTripModalIsOpen, setTripIsOpen] = useState(false);

  const [tripData, updateTripData] = useState([]);

  useEffect(() => {
    fetch('/api/trips')
      .then(result => {
        return result.json()
      })
      .then(data => {
        updateTripData(data);
      })
      .then(() => {return components})
  }, [])


  // handle events when modals are opened and closed
  function openPinModal() {
    setPinIsOpen(true);
  }

  function closePinModal() {
    setPinIsOpen(false);
  }

  function openNewTripModal() {
    setTripIsOpen(true);
  }

  function closeNewTripModal() {
    setTripIsOpen(false);
  }

  const components = [
    <Router>
      <div className="app">
        {/* <Link to='/trip-modal'>
          <button onClick={openPinModal}>
            Pin
          </button>
        </Link> */}
        <Link to='/new-trip'>
          <button onClick={openNewTripModal}>
            Add Trip
          </button>
        </Link>
        {/* <button onClick={openPinModal}>
          Pin
        </button>
        <button onClick={openNewTripModal}>
          Add Trip
        </button> */}
        <Map tripData={tripData}/>
        <Modal
          isOpen={pinModalIsOpen}
          onRequestClose={closePinModal}
          contentLabel='Modal to view existing pins'
        >
          <TripModal  />
        </Modal>
        <Modal
          isOpen={newTripModalIsOpen}
          onRequestClose={closeNewTripModal}
          contentLabel='Modal to add new trip'
          >
            <NewTripModal closeNewTrip={closeNewTripModal}/>
          </Modal>
      </div>
    </Router>
  ];
  return components;
};


export default App;