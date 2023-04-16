import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Products from './Pages/Products';
import Foto from './Pages/Foto';
import Error from './Pages/Error';


const router=createBrowserRouter(
  [
   { path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Foto />,
      },
      {
        path: "/*",
        element: <Error />,
      }
    ]}

  ]
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
