import React, { useState } from 'react';

function handleClick(e) {
  // functionality
  console.log('handle click entered')
}
// decalre react hook function
function NewEvent() {
  // return 
  return(
    // form element
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
  )
}


// export 
export default NewEvent;