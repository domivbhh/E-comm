import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './slice.js'
import productReducer from './productSlice'
import cartReducer from "../store/cartSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { version } from 'react';


// })
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   whitelist: ["user"], // In this example, we persist the 'user' reducer
// };


// const rootReducer = combineReducers({
// });



// const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store