import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import newEvent from "./NewEvent.jsx";
import DayView from "./DayView.jsx";
import TripModal from "./TripModal.jsx";

const FullTripView = (props) => {
  // pull in state using useState
  const [tripName, updateTrip] = useState("Montreal");

  const [startDate, updateStartDate] = useState("October 10");

  const [endDate, updateEndDate] = useState("October 18");

  const [pinModalIsOpen, setPinIsOpen] = useState(false);

  const [newTripModalIsOpen, setTripIsOpen] = useState(false);

  // handle events when modals are opened and closed
  function openPinModal() {
    setPinIsOpen(true);
  }

  function closePinModal() {
    setPinIsOpen(false);
  }

  function openNewTripModal() {
    setTripIsOpen(true);
  }

  function closeNewTripModal() {
    setTripIsOpen(false);
  }

  return (
    <Router>
      <div className="full-trip">
        <Switch>
          <Route exact path='/full-trip'>
            {/* must use state to access name, date, etc */}
            <h2>{tripName}</h2>
            <h3>
              {startDate} to {endDate}
            </h3>
            <Link to='/trip-modal'>
              {/* sends to trip modal page */}
              <button>Back</button>
            </Link>
            {/* add functionality to send to day view */}
            <Link to='/day-view'>
              <button>See Details</button>
            </Link>
            <table>
              <thead>
                <tr>{"Itinerary"}</tr>
              </thead>
              <tbody>
                <tr>{"Insert row here"}</tr>
              </tbody>
              {/* every row will be an event fetched from database */}
            </table>
            {/* feel like this button is repetitive */}
            <button>Add Details</button>
          </Route>
          <Route exact path='/trip-modal' component={TripModal} />
          <Route exact path='/day-view' component={DayView} />
        </Switch>
      </div>
    </Router>
  );
};

export default FullTripView;
