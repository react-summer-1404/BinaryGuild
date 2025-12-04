import { configureStore } from "@reduxjs/toolkit";
import { FilterAcceptReducer } from "./slices/FillterAccept";

export const store = configureStore({
    reducer : {
        accept : FilterAcceptReducer,
    }
})

export type RootState = ReturnType<typeof store.getState/>

export type AppDispatch = typeof store.dispatch