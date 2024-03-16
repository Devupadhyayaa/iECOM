import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './pages/cart.jsx'
import './css/index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom' 
import {store} from "./Redux/store.js"
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
