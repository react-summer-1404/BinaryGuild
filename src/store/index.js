import { configureStore } from "@reduxjs/toolkit";
import userFilterSlice from "./filterSlice"

export const store = configureStore({
    reducer:{
        UserFilter : userFilterSlice,
    }
})