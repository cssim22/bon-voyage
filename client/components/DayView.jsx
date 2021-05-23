import React from 'react';
import NewEvent from './NewEvent.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const handleAddEvent = e => {
  //add functionality for add event button click
}



const DayView = props => {
  return (
    <div className="new-day">
      <button onClick={handleAddEvent}>Add Event</button>
      <Modal>
        <NewEvent/>
      </Modal>
    </div>
  )
}

export default DayView;