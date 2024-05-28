import React from "react";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Messages from "./pages/messages/Messages";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {

  const Layout = () =>{
    return (
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>  
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>, 
      children: [
        {
          path:"/",
          element:<Home/>,
        }
        ,
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    }
  ])

  return (
    <div className="app">
      {/* <Navbar/> */}
  <RouterProvider router={router}/>
    </div>
  )
}

export default App  