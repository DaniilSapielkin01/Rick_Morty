import React from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Nav = () => (
 <div className="container d-flex justify-content-between">
  <div className="d-flex align-items-center">
   <Logo />
   <div className="d-flex align-items-center">
    <Nav />
   </div>
  </div>
 </div>
)