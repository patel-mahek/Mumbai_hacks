import React from 'react'
import './Fotter.css'
const Fotter = () => {
    const today = new Date()
  return (
    <div>
      <p id="fott">Copyright &copy; {today.getFullYear()}</p>
    </div>
  )
}

export default Fotter
