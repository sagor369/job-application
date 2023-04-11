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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <App></App>,
        loader: ()=> fetch('/public/jobs.json')
      },
      {
        path: 'jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/public/jobs.json')
        
      },
      {
        path: 'apply/:applyId',
        element: <ApplyJob></ApplyJob>,
        loader: () => fetch('/public/jobs.json') 
        
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
