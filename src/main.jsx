import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './component/Layout';
import JobDetails from './component/JobDetails';
import ApplyJob from './component/ApplyJob';
import Rechart from './component/Rechart';
import Blog from './component/Blog';
import Erorr from './component/Erorr';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement:<Erorr></Erorr>,
    children:[
      {
        path: '/',
        element: <App></App>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: 'jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
        
      },
      {
        path: 'apply/:applyId',
        element: <ApplyJob></ApplyJob>,
        loader: () => fetch('/jobs.json') 
        
      },
      {
        path: '/apply',
        element: <ApplyJob></ApplyJob>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/rechart',
        element: <Rechart></Rechart>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
