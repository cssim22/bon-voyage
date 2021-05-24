import React from 'react';
import NewEvent from './NewEvent.jsx';
import Modal from 'react-modal';
import FullTripView from './FullTripView.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

Modal.setAppElement('#root');

const DayView = props => {
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
            <Link to="/add-event">
              <button>Add Event</button>
            </Link>
          </Route>
          <Route exact path='/add-event' component={NewEvent} />
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