import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateProfile from './components/routes/UpdateProfile';
import UserProfile from './components/routes/UserProfile';
import Root from './Root';
import Home from './Home';
import Community from './components/routes/Community';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error> ,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/community',
        element:<Community></Community>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
