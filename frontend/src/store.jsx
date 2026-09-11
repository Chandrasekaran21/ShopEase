 import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./slices/apiSlice"
import cartSliceReducer from "./slices/cartSlice"
import themeReducer from "./slices/themeSlice"
import authReducer from "./slices/authSlice";

 export const store = configureStore({

    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        cart:cartSliceReducer,
        theme:themeReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware)
 })
