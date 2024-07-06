import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest"; // Make sure to import newRequest
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">WorkWave</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>WorkWave Business</span>
           <span>Explore</span> 
          <span>EN</span>
              {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <>
              <span onClick={handleLogout}>Logout</span>
            </>
          ) : (
            <Link className="link" to="/login">Log in</Link>
            
          )}
          
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
