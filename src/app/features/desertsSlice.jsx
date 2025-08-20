import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    deserts : [],
    totalPrice : 0,
    totalAmount : 0
}

let desertsSlice = createSlice({
    name : "deserts",
    initialState,
    reducers : {
        addDesert : (state, {payload}) => {
            desertsSlice.caseReducers.calculateTotal()
        },
        removeDesert : (state, {payload}) => {
            desertsSlice.caseReducers.calculateTotal()
        },
        clearDesert : (state, {payload}) => {
            desertsSlice.caseReducers.calculateTotal()
        },
        calculateTotal : (state) => {}
    }
})

export let {addDesert, clearDesert, removeDesert} = desertsSlice.actions
export default desertsSlice.reducer