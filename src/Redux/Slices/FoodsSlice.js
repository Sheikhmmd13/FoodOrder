const { createSlice } = require('@reduxjs/toolkit');

const FoodsList = [
	{
		id: 'B1',
		name: 'Burger',
		price: 5.99,
		amount: 0,
	},
	{
		id:'P2',
		name: 'Pizza',
		price: 13.59,
		amount: 0,
	},
	{
		id: 'S3',
		name: 'Salad',
		price: 3.2,
		amount: 0,
	},
	{
		id: 'F4',
		name: 'Fires',
		price: 8,
		amount: 0,
	},
];

export const FoodsSlice = createSlice({
	name: 'Foods',
	initialState: FoodsList,
	reducers: {
		addBurger: (state, action) => {
			state[0].amount = action.payload;
		},
		addPizza: (state) => {
			state[1].amount++;
		},
		addSalad: (state) => {
			state[2].amount++;
		},
		addFires: (state) => {
			state[3].amount++;
		},
	},
});

export const FoodActions = FoodsSlice.actions;

export default FoodsSlice.reducer;
