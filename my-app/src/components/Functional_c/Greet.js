import React from 'react'
import './Greet.css'

const Greet = () => {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10){
    minutes = "0" + minutes
    }
  return (
    <div id='greet'>
      <p id="time">
        <i>{hours}:{minutes}</i> 
      </p>
      <p id="content_greet">Ohh look at the time... it's sign-up o'clock! Don't keep your customers waiting—let's get started!</p>
      <button id="hello" onClick={() => alert("Button clicked!")}>Get Started !</button>
    </div>
  )
}


export default Greet
