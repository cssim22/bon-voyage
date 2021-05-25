// import the useState hook from React, which lets us keep local state in a function component
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import FullTripView from './FullTripView.jsx';

// Modal.setAppElement('#root');

function TripModal(props) {
  // declare new state variables by calling the useState Hook. useState returns an array with a pair of values, a variable and a function that allows us to update that variable
  // array destructuring 
  const [tripName, updateTrip] = useState(props.clickLocation);

  const [date, updateDate] = useState('May 22');

  const [people, updatePeople] = useState('Team Pink Fairy Armadillos');

  function handleDelete(e) {
    console.log('this is tripName in handledelete',tripName);
    // e.preventDefault();
    // console.log('this is e handle delete',e)
    fetch(`/api/remove-trip`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({tripName: tripName}),
    }).then(response =>  console.log(response.json()))
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <h3>Location: {props.clickLocation}</h3>
            <h3>Date: {date}</h3>
            <h3>PLACEHOLDER FOR IMG</h3>
            {/* <img/> */}
            <h3>People: {people}</h3>
            <Link to='/full-trip'>
              <button>
                See Trip Details
              </button>
            </Link>
            <button onClick={handleDelete} >
              Delete Trip
            </button>
          </Route>
          <Route exact path='/full-trip' component={FullTripView}/>
        </Switch>
      </div>
    </Router>
  )
}


export default TripModal;