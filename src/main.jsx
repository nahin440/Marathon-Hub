import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Marathons from './Components/Marathons/Marathons';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import AddMarathon from './Components/Dashboard/AddMarathon';
import MyMarathons from './Components/Dashboard/MyMarathons';
import MyApply from './Components/Dashboard/MyApply';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "marathons",
        element: <Marathons></Marathons>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "dashboard/add-marathon",
        element: <AddMarathon></AddMarathon>
      },
      {
        path: "dashboard/my-marathons",
        element: <MyMarathons></MyMarathons>,
      },
      {
        path: "dashboard/my-apply-list",
        element: <MyApply></MyApply>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
