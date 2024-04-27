import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Main from './routes/Main.jsx'
import Login from './routes/Login.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
