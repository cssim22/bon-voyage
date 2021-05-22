import React, { useState } from 'react';
import Modal from 'react-modal';
import TripModal from './TripModal.jsx';
// import { BrowserRouter as Router } from 'react-router-dom';

Modal.setAppElement('#root');

function App() {
  // pull in state using useState
  const [modalIsOpen, setIsOpen] = useState(false);

  // handle events when modals are opened and closed
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return(
    // <Rotuer>
      <div className="App">
        <button onClick={openModal}>
          Pin
        </button>
        <button>
          Add Trip
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Modal Example'>
            <TripModal/>
          </Modal>
      </div>
    // </Rotuer>
  );
};


export default App;