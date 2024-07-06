import React, { useState } from 'react';
import axios from 'axios'; 
import "./login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      console.log(res.data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
  
      console.log(res.data);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid username or password"); // Set error message
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}> {/* Call handleSubmit when the form is submitted */}
        <h1>Log In</h1>
        {error && <div className="error">{error}</div>} {/* Display error message if exists */}
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Your name" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;
