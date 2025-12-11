import { configureStore } from "@reduxjs/toolkit";
import { FilterAcceptReducer } from "./slices/FillterAccept";

export const store = configureStore({
    reducer : {
        accept : FilterAcceptReducer,
    }
})