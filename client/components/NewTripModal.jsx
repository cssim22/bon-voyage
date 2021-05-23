import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const initialState = Object.freeze({
  name: '',
  start_date: '',
  end_date: '',
  people: '',
  location: ''
});

function NewTripModal() {

  const [formData, updateFormData] = useState(initialState);

  const handleChange = e => {
    e.preventDefault();
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // define event handler for on click of submit to send post request to the server
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    fetch(`/api/new-trip`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      // url: `/api/new-trip?name=${formData.tripName}&start_date=${formData.startDate}&end_date=${formData.endDate}&people=${formData.people}&location=${formData.location}`
      body: JSON.stringify(formData)
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('the error is client side'));
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label forhtml='tripName'>
        Trip Name: 
        </label>
        <input name="name" onChange={handleChange} />
        <br></br>
      <label>
        Start Date: 
        <input type="date" name="start_date" onChange={handleChange}/>
        <br></br>
      </label>
      <label>
        End Date: 
        <input type="date" name="end_date" onChange={handleChange} />
        <br></br>
      </label>
      <label>
        People: 
        <input name="people" onChange={handleChange} />
        <br></br>
      </label>
      {/* <label>
        Favorite Picture: 
        <input type="file" name="coverPicture" onChange={handleChange} />
        <br></br> */
      /* </label> */}
      <label>
        Location: 
        </label>
        <input name="location" onChange={handleChange} />
        <br></br>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewTripModal;