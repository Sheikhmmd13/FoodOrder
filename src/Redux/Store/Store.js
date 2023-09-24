import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slices/CounterSlice';
import showCartReducer from '../Slices/ShowCartSlice';
import foodReducer from '../Slices/FoodsSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        showCart: showCartReducer,
        foods: foodReducer
    },
});