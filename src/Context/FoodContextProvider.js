import { useReducer } from 'react';

import FoodContext from './FoodsContext';

const defaultState = {
	items: [],
	totalAmount: 0,
};

function FoodStateReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);
			const existingCartItem = state.items[existingCartItemIndex];
			console.log(action.item.amount * action.item.price);
			const updatedTotalAmount_onAdd =
				state.totalAmount + action.item.amount * action.item.price;

			let updatedItems_onAdd;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount:
						existingCartItem.amount + parseInt(action.item.amount),
				};
				updatedItems_onAdd = [...state.items];
				updatedItems_onAdd[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems_onAdd = state.items.concat(action.item);
			}

			return {
				items: updatedItems_onAdd,
				totalAmount: updatedTotalAmount_onAdd,
			};

		case 'REMOVE':
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);
			const existingItem = state.items[existingItemIndex];
			const updatedTotalAmount_onRemove =
				state.totalAmount - existingItem.price;

			let updatedItems_onRemove;

			if (existingItem.amount === 1) {
				updatedItems_onRemove = state.items.filter(
					(item) => item.id !== action.id
				);
			} else {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updatedItems_onRemove = [...state.items];
				updatedItems_onRemove[existingItemIndex] = updatedItem;
			}

			return {
				items: updatedItems_onRemove,
				totalAmount: updatedTotalAmount_onRemove,
			};

		default:
			return defaultState;
	}
}

function FoodContextProvider(props) {
	const [FoodState, FoodStateDispatch] = useReducer(
		FoodStateReducer,
		defaultState
	);

	const addItemToCart = (item) => {
		FoodStateDispatch({ type: 'ADD', item: item });
	};
	const removeItemFromCart = (id) => {
		FoodStateDispatch({ type: 'REMOVE', id: id });
	};

	const ContextValue = {
		items: FoodState.items,
		totalAmount: FoodState.totalAmount,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
	};

	return (
		<FoodContext.Provider value={ContextValue}>
			{props.children}
		</FoodContext.Provider>
	);
}

export default FoodContextProvider;
