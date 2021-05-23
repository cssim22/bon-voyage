import React from 'react';

const FullTripView = props => {
  return (
    <div className="full-trip">
      {/* must use state to access name, date, etc */}
      <h2>name of trip</h2>
      <h3>date of trip</h3>
      {/* add functionality to send back to trip modal */}
      <button>Back</button>
      {/* add functionality to send to day view */}
      <button>See Details</button>
      <table>
        <thead>
          <tr>{'Itinerary'}</tr>
        </thead>
        <tbody>
          <tr>{'Insert row here'}</tr>
        </tbody>
        {/* every row will be an event fetched from database */}
      </table>
      <button>Add Details
      </button>
    </div>
  )
}

export default FullTripView;