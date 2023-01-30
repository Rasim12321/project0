import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        value : {}
    },
    reducers : {
        increment : (state, data) => {
            let articul = data.payload
            if (state.value[articul] === undefined) state.value[articul] = 0
            state.value[articul]++
        },
        decrement : (state, data) => {
            let articul = data.payload          
            state.value[articul]--
            if (state.value[articul] === 0) document.getElementsByClassName(articul)[0].remove()
        }
    }
})

export const {increment, decrement} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;