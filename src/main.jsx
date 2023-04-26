import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1- Configurando 
import {createBrowserRouter,RouterProvider}from "react-router-dom"

import Home from './assets/routes/Home/Home'
import Contact from './assets/routes/Contact/Contact'
import Login from './assets/routes/Login/Login'

  const router= createBrowserRouter([
    {path:"/",
    element:<App/>,
  },

  {
    path:"home",
    element:<Home/>,
  },
    
    {
     path:"contact",
     element:<Contact/>,
   },


   {
    path:"login",
    element:<Login/>,
   },
    
  ])

  //const router= createBrowserRouter([
    //{
     // path:"/",
    //element:<App/>,
    //children:[
    //{
      //path:"home",
       //element:<Home/>,
    //},

    //{
     //path:"contact",
      //element:<Contact/>,
   //},
  //]
  //}
  //]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
