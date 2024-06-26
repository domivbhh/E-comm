import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './slice.js'
import productReducer from './productSlice'
import cartReducer from "../store/cartSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { version } from 'react';
// import persistStore from "redux-persist/es/persistStore";

// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Assuming you have imported storage

// // Your reducers
// import productReducer from "./productReducer";
// import cartReducer from "./cartReducer";
// import userReducer from "./userReducer";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   whitelist: ["user"], // Persist only 'user' reducer
// };

// // Combine your reducers
// const rootReducer = combineReducers({
//   product: productReducer,
//   cart: cartReducer,
//   user: userReducer,
// });

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure your Redux store
// const store = configureStore({
//   reducer: persistedReducer, // Pass persistedReducer here
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Use default middleware as-is
// });

// // Create persistor
// const persistor = persistStore(store);




// })




// const persistConfigs= {
//   key: "root",
//   version: 1,
//   storage,
//   // whitelist: ["user"], // In this example, we persist the 'user' reducer
// };


// // const rootReducer = combineReducers({
// //   product: productReducer,
// //   cart: cartReducer,
// //   user: userReducer,
// // });



// // const persistedReducer = persistReducer(persistConfigs, rootReducer);



const store = configureStore({
  reducer: {
    product: productReducer,
      cart: cartReducer,
      user: userReducer,
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
  //   serializableCheck:false
  // }),
});

// // const persistor=persistStore(store)


export default store

