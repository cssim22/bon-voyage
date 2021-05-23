// import the useState hook from React, which lets us keep local state in a function component
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root');

function TripModal() {
  // declare new state variables by calling the useState Hook. useState returns an array with a pair of values, a variable and a function that allows us to update that variable
  // array destructuring 
  const [tripName, updateTrip] = useState('Colombia');

  const [date, updateDate] = useState('May 22');

  const [people, updatePeople] = useState('Team Pink Fairy Armadillos');

  return (
    <div>
      <h3>Trip: {tripName}</h3>
      <h3>Date: {date}</h3>
      <h3>PLACEHOLDER FOR IMG</h3>
      {/* <img/> */}
      <h3>People: {people}</h3>
      <button onClick={() => updateTrip('Capetown')}>See Details
      </button>
      <button>Add Details
      </button>
    </div>
  )
}


export default TripModal;