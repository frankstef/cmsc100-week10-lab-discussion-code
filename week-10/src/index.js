import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './pages/Root';
import Subjects from './pages/Subjects';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';


const router = createBrowserRouter([
  //list of routes that we will define

  //path and element that will show if we went to the path
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <Home /> },
      { path: '/subjects', element: <Subjects /> },
      //path with parameter for subject codes
      //colon is like the dollar sign, it tells the path that what comes after the colon is the parameter
      {path:'subjects/:code', element: <SubjectDetail />}
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* router props */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

