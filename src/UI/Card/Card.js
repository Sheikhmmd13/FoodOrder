import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../../Redux/Slices/CounterSlice';
import { FoodActions } from '../../Redux/Slices/FoodsSlice';

import classes from './Card.module.css';
import { useEffect } from 'react';

export default function Card({ name, price, id }) {
	const count = useSelector((state) => state.counter.value);
	const Foods = useSelector((state) => state.foods);
	const dispatch = useDispatch();

	useEffect(() => {
		if (name === 'Burger') {
			dispatch(FoodActions.addBurger(count));
		}
	}, [count]);

	const amoundOfFood = () => {
		// by seleceting id find food amount
	}

	return (
		<div
			className={`${classes.container} bg-[#fff] rounded-xl hover:scale-105 flex justify-between`}>
			<div
				className={`${classes.information} flex justify-start flex-col gap-1`}>
				<h2 className="text-xl font-bold">{name}</h2>
				<p>Price: {price}$</p>
			</div>{' '}
			{/* for title and price */}
			<div
				className={`${classes.functions} flex flex-col justify-center gap-2`}>
				<div className={`flex justify-between items-center gap-1`}>
					<FontAwesomeIcon
						icon={faPlus}
						className="cursor-pointer hover:text-orange-700 transition-colors"
						onClick={() => {
							dispatch(increase());
						}}
					/>
					<span className="bg-orange-700 px-2 rounded-lg h-auto text-white">
						{amoundOfFood}
					</span>
					<FontAwesomeIcon
						icon={faMinus}
						className="cursor-pointer  hover:text-orange-700 transition-colors"
						onClick={() => {
							dispatch(decrease());
						}}
					/>
				</div>
				<button
					className={`${classes.addBtn} outline outline-1 outline-orange-700 text-orange-700 px-3 rounded-lg hover:outline-none hover:bg-orange-700 hover:text-white transition-all`}>
					Add
				</button>
			</div>{' '}
			{/* for amound and add to cart */}
		</div>
	);
}
