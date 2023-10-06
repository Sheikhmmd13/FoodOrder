import { useContext } from 'react';

import FoodContext from '../../Context/FoodsContext';
import Input from '../Input/Input';
import classes from './Card.module.css';

export default function Card(props) {
	const FoodCtx = useContext(FoodContext);

	const addFoodToCart = (amount) => {
		const item = {
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		};
		FoodCtx.addItem(item);

	};

	return (
		<div
			className={`${classes.container} bg-[#fff] rounded-xl py-2 px-5 hover:scale-105 flex justify-between items-center max-lg:px-4 max-sm:px-3
			`}>
			<div
				className={`${classes.information} flex justify-start flex-col gap-1`}>
				<h2 className="text-xl font-bold">{props.name}</h2>
				<p>Price: <span className='text-orange-700'>${+props.price}</span></p>
			</div>
			<div
				className={`${classes.functions} flex flex-col justify-center gap-3 w-2/5 `}>
				<Input
					label="amount"
					addFood={addFoodToCart}
					input={{
						id: props.id,
						type: 'number',
						min: 1,
						max: 5,
						step: 1,
						defaultValue: 0,
					}}
				/>
			</div>
		</div>
	);
}