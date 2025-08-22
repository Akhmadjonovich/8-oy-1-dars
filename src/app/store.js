import { configureStore } from "@reduxjs/toolkit";
import desertsSlice from "./features/desertsSlice"
export let store = configureStore({
    reducer: {
        desserts : desertsSlice
    }
})

