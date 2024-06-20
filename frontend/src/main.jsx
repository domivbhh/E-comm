import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Error from './components/Error.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Menu from './Pages/Menu.jsx'
import Login from './Pages/Login.jsx'
import Product from './Pages/Product.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Signin/>,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup/>,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Product/>,
        errorElement: <Error />,
      },
      {
        path:'/new-product',
        element:<Home/>,
        errorElement:<Error/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

  <RouterProvider router={router}>
    <App />
  </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
