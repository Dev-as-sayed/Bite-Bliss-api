import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Componest/Pages/Home/Home';
import Blog from './Componest/Pages/Blog/Blog';
import AllFood from './Componest/Pages/AllFood/AllFood';
import Login from './Componest/Pages/Login/Login';
import Registar from './Componest/Pages/Registar/Registar';
import AuthProviders from './AuthProviders/AuthProviders';
import Profile from './Componest/Shared/Profile/Profile';
import FoodDetails from './Componest/Pages/FoodDetails/FoodDetails';
import AddProduct from './Componest/Pages/AddProduct/AddProduct';
import MyFoods from './Componest/Pages/MyFoods/MyFoods';
import UpdateFood from './Componest/Pages/UpdateFood/UpdateFood';
import MyOrders from './Componest/Pages/MyOrders/MyOrders';
import PrivateRaute from './PrivateRaute/PrivateRaute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/allFood",
        element: <PrivateRaute><AllFood></AllFood></PrivateRaute>,
        loader: () => fetch('https://bite-bliss-server-alpha.vercel.app/getCount')
      },
      {
        path: "/foodDetails/:_id",
        element: <PrivateRaute><FoodDetails></FoodDetails></PrivateRaute>
      },
      {
        path: '/profile/:email',
        element: <Profile></Profile>
      },
      {
        path: '/addProduct',
        element: <PrivateRaute><AddProduct></AddProduct></PrivateRaute>
      },
      {
        path: '/myFoods',
        element: <PrivateRaute><MyFoods></MyFoods></PrivateRaute>
      },
      {
        path: '/updateFood/:_id',
        element: <PrivateRaute><UpdateFood></UpdateFood></PrivateRaute>
      },
      {
        path: '/myOrders',
        element: <PrivateRaute><MyOrders></MyOrders></PrivateRaute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registar",
        element: <Registar></Registar>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
