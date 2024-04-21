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
import Login from './components/Login';
import Register from './components/Register';
import EstateDetails from './components/estates/EstateDetails';
import AuthProvider from './components/provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
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
        element: <Community></Community>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/estateDetails/:id',
        element: <EstateDetails></EstateDetails>,
        loader: ()=> fetch('/estates.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
