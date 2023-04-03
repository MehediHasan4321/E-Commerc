import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Components/Main/Products/Products'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import LogIn from './Components/LogIn/LogIn'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path : 'product',
        element: <Products/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'about',
        element: <About/>
      },
      {
        path : 'loging',
        element: <LogIn/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
