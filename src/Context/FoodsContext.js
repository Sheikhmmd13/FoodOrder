import React from 'react';
import { useReducer } from 'react';

const FoodContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (itme) => {},
	removeItem: (id) => {},
});

export default FoodContext;

// context provider
// const defaultFoodState = {
// 	items: [],
// 	totalAmount: 0,
// };

// const FoodReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD':
// 			const updatedItem = state.items.concat(action.item);
// 			const updatedTotalAmount =
// 				state.totalAmount + action.item.price * action.item.amout;

// 			return {
// 				items: updatedItem,
// 				totalAmount: updatedTotalAmount,
// 			};
// 		default:
// 			break;
// 	}

// 	return defaultFoodState;
// };

// const FoodContextProvider = (props) => {
// 	const [FoodState, FoodDispatch] = useReducer(FoodReducer, defaultFoodState);

// 	const addItemToCart = (item) => {
// 		FoodDispatch({ type: 'ADD', item: item });
// 	};

// 	const removeItemFromCart = (id) => {
// 		FoodDispatch();
// 	};

// 	const FoodContextValue = {
// 		item: FoodState.items,
// 		totalAmount: FoodState.totalAmount,
// 		addItem: addItemToCart,
// 		removeItem: removeItemFromCart,
// 	};

// 	return (
// 		<FoodContext.Provider value={FoodContextValue}>
// 			{props.children}
// 		</FoodContext.Provider>
// 	);
// };

// export default FoodContextProvider
