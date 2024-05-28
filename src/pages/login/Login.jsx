import React from 'react'
import "./login.scss"
const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input type="text" name="username"/>

        <label htmlFor="">Password</label>
        <input type="password" name="password"/>

        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Login