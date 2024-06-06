import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Men from './components/pages/Men.jsx'
import Women from './components/pages/Women.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/men",
        element: <Men />
      },
      {
        path: "/women",
        element: <Women />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
