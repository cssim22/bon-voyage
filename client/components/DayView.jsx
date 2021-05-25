import React, { useState, useEffect } from 'react';
import NewEvent from './NewEvent.jsx';
import Modal from 'react-modal';
import FullTripView from './FullTripView.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

Modal.setAppElement('#root');

const DayView = props => {
  const [eventData, updateEventData] = useState([]);
  
  //fetch location from state
  const location = props.location;
  console.log('dayViewProps', location);

  //upon render of component, fetch event data from database
  useEffect(() => {
    fetch(`/api/events?location=${location}`)
      .then(result => {
        return result.json()
      })
      .then(data => {
        updateEventData(data);
      })
      .catch(err => console.log(`error in useEffect of DayView: ${err}`))
  }, [])

  const [clickLocation, updateClickLocation] = useState('')

  function passLocation() {
    updateClickLocation(props.location);
  }

  return (
    <Router>
      <div className="new-day">
        <Switch>
          <Route exact path='/day-view'>
            <h2>Day One</h2>
            <Link to='/full-trip'>
              {/* sends to full trip view */}
              <button>Back</button>
            </Link>
            {/* need event component */}
            <Link to="/add-event" onClick={passLocation}>
              <button>Add Event</button>
            </Link>
          </Route>
          <Route exact path='/add-event'>
            <NewEvent location={props.location}/>
          </Route>
          <Route exact path='/full-trip' component={FullTripView} />
          <Modal>
            <NewEvent/>
          </Modal>
        </Switch>
      </div>
    </Router>
  )
}

export default DayView;