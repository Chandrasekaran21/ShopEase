import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    } from 'react-router-dom'
    
import Homescreen from './pages/Homescreen.jsx'
import CartScreen from './pages/CartScreen.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import products from './products.js'
import { store } from './store.jsx'
import { Provider } from "react-redux"
import LoginScreen from './pages/LoginScreen.jsx'
import RegisterScreen from "./pages/RegisterScreen.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} >
            <Route index={true} path='/' element={<Homescreen/>} ></Route>
            <Route path='/product/:id' element={<ProductDetails/>} ></Route>
            <Route path='/cart' element={<CartScreen/>} ></Route>
            <Route path='/login' element={<LoginScreen/>} ></Route>
            <Route path='/register' element={<RegisterScreen/>} ></Route>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </Provider>
  
)
