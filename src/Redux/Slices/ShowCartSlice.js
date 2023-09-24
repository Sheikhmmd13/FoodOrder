import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
    name: 'ShowCart',
    initialState: {isShownCart: false},
    reducers:{
        toggle: state => {state.isShownCart = !state.isShownCart}
    }
});

export const {toggle} = showCartSlice.actions;
export default showCartSlice.reducer