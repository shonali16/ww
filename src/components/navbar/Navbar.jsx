import React from 'react'
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <span className="text">WorkWave</span>
          <div className="dot">.</div>
        </div>
        <div className="links">
          <span>WorkWave Business</span>
          <span>Sign in </span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar