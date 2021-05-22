import React, { Component, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function TripModal() {
  const [tripName, updateTrip] = useState('Colombia');

  const [dateTitle, updateDate] = useState('May 22');

  const [people, updatePeople] = useState('Team Pink Fairy Armadillos');

  return (
    <div>
      <h3>Trip: {tripName}</h3>
      <h3>Date: {dateTitle}</h3>
      <h3>PLACEHOLDER FOR IMG</h3>
      {/* <img/> */}
      <h3>People: {people}</h3>
      <button>See Details
      </button>
      <button>Add Details
      </button>
    </div>
  )
}

// class Modal extends Component {
//   render() {

//     return(
//       <div>Modal</div>
//     )
//   }
// }

export default TripModal;