import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Error from './components/Error.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
// import Menu from './Pages/Menu.jsx'
import Login from './Pages/Login.jsx'
// import Product from './Pages/Product.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import Home from './Pages/Home.jsx'
import NewProducts from './Pages/NewProducts.jsx'
import Cart from './Pages/Cart.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import Payment from './Pages/Payment.jsx'
// import { persistor } from './store/store.js'


const Product = lazy(()=>import("./Pages/Product.jsx"));
// let persistor=persistStore(store)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element:<Home/>
      },
      
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
        path: "/cart",
        element: <Cart/>,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Product/>
        </Suspense>,
        errorElement: <Error />,
      },
      {
        path:'/new-product',
        element:<NewProducts/>,
        errorElement:<Error/>
      },
      {
          path:'/payment',
          element:<Payment/>,
          errorElement:<Error/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<Provider store={store}>

  {/* <PersistGate persistor={persistor} loading={null}> */}
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  {/* </PersistGate> */}

</Provider>
  // </React.StrictMode>,
)
