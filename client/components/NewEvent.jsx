import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DayView from './DayView.jsx';

function handleClick(e) {
  // functionality
  console.log('handle click entered')
}
// decalre react hook function
function NewEvent() {
  // return 
  return(
    // form element
    <Router>
      <Switch>
        <Route exact path='/add-event'>
          <form onSubmit={() => handleClick}>
            {/* 6 text inputs */}
            <label>   
              Time: 
              <input type='text' name='time' />
            </label>
            <label>           
              Name: 
              <input type='text' name='eventName' />
            </label>
            <label>
              Location: 
              <input type='text' name='location' />
            </label>
            <label>
              Link: 
              <input type='text' name='link' />
            </label>
            <label>
              Stories: 
              <input type='textarea' name='story' />
            </label>
            <label>
              Add Photos: 
              <input type='file' name='photos' />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <Link to='/day-view'>
              {/* sends to day view */}
              <button>Back</button>
          </Link>
        </Route>
        <Route exact path='/day-view' component={DayView} />
      </Switch>
    </Router>
  )
}


// export 
export default NewEvent;