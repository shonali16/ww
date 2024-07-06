import React from "react";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Messages from "./pages/messages/Messages";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AboutUs from "./pages/aboutus/AboutUs";
import Message from "./pages/message/Message";
import Orders from "./pages/orders/Orders";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
function App() {


   const queryClient = new QueryClient();
  const Layout = () =>{
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </QueryClientProvider>
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
          path: "/gigs",
          element: <Gigs/>,
        },
         {
          path: "/myGigs",
          element: <MyGigs />,
        },
         {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
           {
          path: "/gig/:id",
          element: <Gig />,
        },
         {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/aboutus",
          element: <AboutUs/>
        },
        {
          path: "/messages",
          element: <Messages/>
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