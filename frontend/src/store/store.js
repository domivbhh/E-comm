import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice.js'
import productReducer from './productSlice'
import cartReducer from "../store/cartSlice"

const store=configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
        cart:cartReducer

    }
})

export default store