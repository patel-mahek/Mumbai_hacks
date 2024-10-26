import React from 'react'
import './Props.css'
const Props = (props) => {
  return (
    <div>
      <h1 className="dash_c" id="page1">Name : {props.name1}</h1>
      <h1 className="dash_c" id="page2">Name : {props.name2}</h1>
      <h1 className="dash_c" id="page3">Name : {props.name3}</h1>
      <h1 className="dash_c" id="page4">Name : {props.name4}</h1>
    </div>
  )
}

export default Props
