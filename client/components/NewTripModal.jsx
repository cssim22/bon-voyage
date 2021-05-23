import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function NewTripModal() {

  const [reqPath, setReqPath] = useState(null);

  const handleNewLocation = e => {
    e.preventDefault();
    console.log(e.target.value);
    reqPath = setReqPath(e.target.value);
  }

  // define event handler for on click of submit to send post request to the server
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);

    // const data = {
    //   location: e.target.,
    //   startDate: ,
    //   endDate: ,
    //   people: ,
    //   image:
    // }

    //send post request to server
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label forhtml='tripName'>
        Location: 
        </label>
        <input type="text" name="tripName" onChange={handleNewLocation} />
        <br></br>
      <label>
        Start Date: 
        <input type="date" name="startDate" />
        <br></br>
      </label>
      <label>
        End Date: 
        <input type="date" name="endDate" />
        <br></br>
      </label>
      <label>
        People: 
        <input type="text" name="people" />
        <br></br>
      </label>
      <label>
        Favorite Picture: 
        <input type="file" name="coverPicture" />
        <br></br>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewTripModal;