// import the useState hook from React, which lets us keep local state in a function component
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import FullTripView from './FullTripView.jsx';

// Modal.setAppElement('#root');

function TripModal(props) {
  // declare new state variables by calling the useState Hook. useState returns an array with a pair of values, a variable and a function that allows us to update that variable
  // array destructuring 
  const [tripName, updateTrip] = useState('Colombia');

  const [date, updateDate] = useState('May 22');

  const [people, updatePeople] = useState('Team Pink Fairy Armadillos');

  const [clickLocation, updateClickLocation] = useState('')

  function passLocation() {
    updateClickLocation(props.clickLocation);
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <h3>Trip: {props.clickLocation}</h3>
            <h3>Date: {date}</h3>
            <h3>PLACEHOLDER FOR IMG</h3>
            {/* <img/> */}
            <h3>People: {people}</h3>
            <Link to='/full-trip'  onClick={passLocation}>
              <button>
                See Trip Details
              </button>
            </Link>
          </Route>
          <Route exact path='/full-trip'>
            <FullTripView location={props.clickLocation} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default TripModal;