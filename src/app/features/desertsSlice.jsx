import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    desserts : [],
    totalPrice : 0,
    totalAmount : 0
}

let desertsSlice = createSlice({
    name : "desserts",
    initialState,
    reducers : {
        addDesert : (state, {payload}) => {
            state.desserts.push({...payload, amount: 1})
            desertsSlice.caseReducers.calculateTotal(state)
        },
        removeDesert : (state, {payload}) => {
            state.desserts = state.desserts.filter((item) => item.id != payload)
            desertsSlice.caseReducers.calculateTotal(state)
        },
        incrementDesert : (state, {payload}) => {
            let item = state.desserts.find((item) => item.id = payload)
            item.amount += 1
            desertsSlice.caseReducers.calculateTotal(state)
        },
        decrementDesert : (state, {payload}) => {
            let item = state.desserts.find((item) => item.id = payload)
            item.amount -= 1
            desertsSlice.caseReducers.calculateTotal(state)
        },
        clearDesert : (state, {payload}) => {
            state.desserts = []
            desertsSlice.caseReducers.calculateTotal(state)
        },
        calculateTotal : (state) => {
            let price = 0 
            let amount = 0
            state?.desserts.forEach((item) => {
                price += item.amount * item.price
                amount += item.amount
            })
            
            state.totalAmount = amount
            state.price = price
        }
    }
})

export let {addDesert, decrementDesert, incrementDesert, clearDesert, removeDesert} = desertsSlice.actions
export default desertsSlice.reducer