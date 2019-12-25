import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
 <div className="logo p-2 bd-highlight">
  <Link to='/'>
   <div className="logo">
    Rick and Morty
  </div>
  </Link>
 </div>
);
