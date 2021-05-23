import React, { useState } from 'react';
import Modal from 'react-modal';
import TripModal from './TripModal.jsx';
import NewTripModal from './NewTripModal.jsx';
import Map from './Map.jsx'
// import { BrowserRouter as Router } from 'react-router-dom';

Modal.setAppElement('#root');

function App() {
  // pull in state using useState
  const [pinModalIsOpen, setPinIsOpen] = useState(false);

  const [newTripModalIsOpen, setTripIsOpen] = useState(false);

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

  return(
    // <Rotuer>
      <div className="app">
        <button onClick={openPinModal}>
          Pin
        </button>
        <button onClick={openNewTripModal}>
          Add Trip
        </button>
        <Map />
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
            <NewTripModal/>
        </Modal>
      </div>
      
    // </Rotuer>
  );
};


export default App;