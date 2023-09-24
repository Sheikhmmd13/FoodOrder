import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const counterSlice = createSlice({
	name: 'Counter',
	initialState: initialState,
	reducers: {
		increase: (state) => {
			state.value++;
		},
		decrease: (state) => {
            if(state.value <= 0) {
                state.value = 0
            } else {
                state.value--;
            }
		},
	},
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
