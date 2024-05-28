import React from 'react';
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to= "/">
             <span >WorkWave</span>
        </Link>
          
          {/* would add after */}
       {/* <img src="../public/img/512.svg" alt="logo" className="text"/> */}
        </div>
        <div className="links">
  
         <Link to="login"><span>Sign In </span></Link> 
          <span>Become a seller</span>
          <button><Link to ="/register">Join</Link></button>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default Navbar