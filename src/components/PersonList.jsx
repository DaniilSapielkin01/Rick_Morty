import React from 'react'
import { Link } from 'react-router-dom'

export const PersonList = ({ person }) => {
 return (
  <Link to={`character/${person.id}`} >
   <div className="person-card" style={{ "margin": "10px" }}>
    <div className="">{person.name}</div>
    <img src={person.image} alt="img" />
   </div>
  </Link >
 )
}