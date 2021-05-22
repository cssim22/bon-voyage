import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function NewTripModal() {

  return (
    <form>
      <label>
        Location: 
        <input type="text" name="tripName" />
        <br></br>
      </label>
      <label>
        Date: 
        <input type="text" name="date" />
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