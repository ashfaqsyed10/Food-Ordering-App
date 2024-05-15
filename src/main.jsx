import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import App from './App';
import Body from './components/Body';
import About from './components/About'
import Error from './components/Error';
import Contact from './components/Contact';
import Restromenu from './components/Restromenu';
// import Shimmer from './components/Shimmer';
import './index.css'
import Cart from './components/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[ 
      {
        path: "/",
      element: <Body/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/restaurants/:resId",
      element: <Restromenu/>,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ],
    errorElement:<Error/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);