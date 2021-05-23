import React from 'react';
import NewEvent from './NewEvent.jsx';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

Modal.setAppElement('#root');

const DayView = props => {
  return (
    <Router>
      <div className="new-day">
        <Switch>
          <Route exact path='/day-view'>
            <h2>Day One</h2>
            {/* need event component */}
            <Link to="/add-event">
              <button>Add Event</button>
            </Link>
          </Route>
          <Route exact path='/add-event' component={NewEvent} />
          <Modal>
            <NewEvent/>
          </Modal>
        </Switch>
      </div>
    </Router>
  )
}

export default DayView;